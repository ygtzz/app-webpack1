var webpack = require('webpack');
//var CleanWebpackPlugin = require('clean-webpack-plugin');
var config = require('./config');
var merge = require('lodash/merge');
var sBase = config.sBase;

var aPlugin = [];
if(config.enableRem){
    //aPlugin.push(require('./plugins/headInjectPlugin'));
}
var aPostcss = [require('autoprefixer')({browsers: ['> 5%','ie 9']})];
if(config.enableRem){
    aPostcss.push(require('postcss-plugin-px2rem')(config.px2remOptions));
    aPostcss.push(require('postcss-flexible')(config.px2rem));    
}

module.exports = {
    entry: config.entry,
    output: {
        path: config.sDist,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        // loaders: [
        //     {test: /\.(js|jsx)$/, loader: "babel", exclude: /node_modules/},
        //     {test: /\.(html)$/, loader: 'html'},
        //     {test: /\.vue$/, loader: 'vue'},
        //     {
        //         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //         loader: 'url',
        //         query: {
        //             limit: 1,
        //             name:'/static/fonts/[name].[ext]'
        //         }
        //     }
        // ],
        rules: [
            {test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.(html)$/, loader: 'html-loader'},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     postcss: aPostcss
        // })
    ],
    resolve:{
        modules: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['.vue','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}