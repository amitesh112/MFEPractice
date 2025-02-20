const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode : "development",
    devServer : {
        port : 1000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name:"container",
            remotes: {
                barchart : "barchart@http://localhost:1001/remoteEntry.js",
                linechart : "linechart@http://localhost:1002/remoteEntry.js",
                tablechart : "tablechart@http://localhost:1003/remoteEntry.js",
            }
        })
    ]
}