const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode : "development",
    devServer: {
        port : 1003
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name : "tablechart",
            filename : "remoteEntry.js",
            exposes: { 
                "./TableChartIndex" : "./src/index",
            }
        }),
    ],
};