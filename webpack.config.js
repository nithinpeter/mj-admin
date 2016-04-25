module.exports = {
    entry: {
        vendor: "./src/vendor",
        app: ["./src/main"]   
    },
    output: {
        fileName: "[name].bundle.js",
        path: __dirname + "/build"
    },

    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    }

}