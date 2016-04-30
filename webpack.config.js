var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

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
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    
    plugins: [
        new CopyWebpackPlugin([
            { from: __dirname + '/src/assets/js', to: __dirname + '/build/js' },
            { from: __dirname + '/src/assets/css', to: __dirname + '/build/css'}
        ])
    ]

}