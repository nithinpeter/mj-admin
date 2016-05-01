var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');


var plugins = [], copyPlugin, uglifyPlugin;

copyPlugin = new CopyWebpackPlugin([
            { from: __dirname + '/src/assets/js', to: __dirname + '/build/js' },
            { from: __dirname + '/src/assets/css', to: __dirname + '/build/css' },
            { from: __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css', to: __dirname + '/build/css' }
        ]);
uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        });
        
if (process.env.NODE_ENV == 'production') {
    plugins.push(
        copyPlugin, uglifyPlugin
    )
} 
else {
    plugins.push(
        copyPlugin
    )
}

module.exports = {
    entry: {
        vendor: "./src/vendor",
        app: ["./src/main"]
    },
    output: {
        fileName: "[name].bundle.js",
        path: __dirname + "/build/js/"
    },

    resolve: {
        extensions: ["", ".ts", ".js"],
        root: [
            path.join(__dirname, 'src', 'assets')
        ]
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ }
        ]
    },

    plugins: plugins

}