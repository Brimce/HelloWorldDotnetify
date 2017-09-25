"use strict";
const path = require("path");
const webpack = require("webpack");
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require("webpack-merge");

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    // Configuration in common to both client-side and server-side bundles
    const sharedConfig = () => ({
        stats: { modules: false },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            modules: [
                path.resolve("."),
                "node_modules"
            ]
        },
        output: {
            filename: "[name].js",
            publicPath: "dist/" // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                 { test: /\.tsx?$/, include: __dirname, use: "awesome-typescript-loader?silent=true" }
            ]
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.ProvidePlugin({ "window.jQuery": "jquery" }),
        ]
    });

    const clientBundleOutputDir = "./wwwroot/dist";
    const clientBundleConfig = merge.smart(sharedConfig(),
        {
            entry: { "main-client": "./boot-client.tsx" },
            output: {
                path: path.resolve(__dirname, clientBundleOutputDir)
            },
            plugins: [
                new ExtractTextPlugin("site.css"),
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require("./wwwroot/dist/vendor-manifest.json")
                })
            ].concat(isDevBuild ? [
                // Plugins that apply in development builds only
                new webpack.SourceMapDevToolPlugin({
                    filename: '[file].map', // Remove this line if you prefer inline source maps
                    moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
                })
            ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin()
            ])

        });

    const serverBundleConfig = merge.smart(sharedConfig(),
        {
            entry: { "main-server": "./boot-server.tsx" },
            output: {
                libraryTarget: "commonjs2",
                path: path.resolve(__dirname, "_ServerDist/")
            },
            resolve: {
                mainFields: ["main"]
            },
            plugins: [
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require("./_ServerDist/vendor-manifest.json"),
                    sourceType: "commonjs2",
                    name: "./vendor"
                })
            ],
            devtool: "inline-source-map",
            target: "node"
        });

    //console.log(clientBundleConfig.plugins);
    return [clientBundleConfig, serverBundleConfig];

    //return serverBundleConfig;
    //return clientBundleConfig;
};