"use strict";
const path = require("path");
const webpack = require("webpack");
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require("webpack-merge");

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const extractCSS = new ExtractTextPlugin("app.css");

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
                 // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader' awesome-typescript-loader?silent=true.
                { test: /\.tsx?$/, include: __dirname, use: "awesome-typescript-loader" },               
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
            module: {
                rules: [
                    { test: /\.css$/, use: isDevBuild ? 'css-loader' : extractCSS.extract({ use: 'css-loader?minimize' }) }
                ]
            },
            output: {
                path: path.resolve(__dirname, clientBundleOutputDir)
            },
            plugins: [
                extractCSS,
                //new ExtractTextPlugin("site.css"),
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

    return clientBundleConfig;
};