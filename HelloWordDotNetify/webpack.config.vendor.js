const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const extractCSS = new ExtractTextPlugin("vendor.css");

    const sharedConfig = {
        stats: { modules: false },
        resolve: { extensions: [ ".js" ] },
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
            ]
        },
        entry: {
            vendor: [
                "react",
                "react-dom",
                "jquery",
                "dotnetify",
                "rxjs",
                //"antd",
                "styled-components",
                "moment"
            ]
        },
        output: {
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]',
        },
        plugins: [
            new webpack.ProvidePlugin(
                   // { $: "jquery", jQuery: "jquery" },// Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
                    {"window.jQuery": "jquery"}
            ),
            new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, require.resolve('node-noop')), // Workaround for https://github.com/andris9/encoding/issues/16
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            })
        ]
    };

    const clientBundleConfig = merge(sharedConfig, {
        output: { path: path.join(__dirname, "wwwroot","dist") },
        module: {
            rules: [
                { test: /\.css(\?|$)/, use: extractCSS.extract({ use: "css-loader" }) }
            ]
        },
        plugins: [
            extractCSS,
            new webpack.DllPlugin({
                path: path.join(__dirname, "wwwroot","dist", "[name]-manifest.json"),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

    const serverBundleConfig = merge(sharedConfig, {
        entry: {
            vendor: [
                "aspnet-prerendering",
                "react-dom/server"
            ]
        },
        target: "node",
        resolve: { mainFields: ["main"] },
        output: {
            path: path.join(__dirname, "_ServerDist"),
            libraryTarget: "commonjs2",
            library:"[name]_[hash]"
        },
        module: {
            rules: [ { test: /\.css(\?|$)/, use: "css-loader" } ]
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, "_ServerDist", "[name]-manifest.json"),
                name: "[name]_[hash]"
            })
        ]
    });

    //return [clientBundleConfig, serverBundleConfig];
    //return serverBundleConfig;
    return clientBundleConfig;
};
