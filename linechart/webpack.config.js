const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode : "development",
    devServer : {
        port : 1002
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name : "linechart",
            filename : "remoteEntry.js",
            exposes : {
                "./LinearChartIndex" : "./src/index",
            }
        }),
    ]
}