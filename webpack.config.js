var path = require("path");
var webpack = require("webpack");


module.exports = {
    entry: {
        "app": "./src/app/main.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        sourceMapFilename: "[name].map",
        chunkFilename: "[id].chunk.js"
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            // {
            //     test: /\.ts$/,
            //     loader: "tslint"
            // }

        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/conventions-loader'],
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts", ".d.ts", ".css", ".json"],
        modulesDirectories: ["node_modules"],
        modules: [
            path.resolve(__dirname),
            "node_modules"
        ],
        root: path.resolve(__dirname)
    },
    plugins: [

    ]
};