var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var config = require('./config');
var merge = require('lodash/merge');
var sBase = config.sBase;

var aPlugin = [];
if(config.enableRem){
    //aPlugin.push(require('./plugins/headInjectPlugin'));
}
var aPostcss = [autoprefixer({browsers: ['> 5%','ie 9']})];
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
        loaders: [
            {test: /\.(js|jsx)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css?importLoaders=1!postcss'},
            {test: /\.scss$/, loader:'style!css?importLoaders=2!postcss!sass'},
            {test: /\.(html)$/, loader: 'html'},
            {test: /\.vue$/, loader: 'vue'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name: '/static/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: aPlugin,
    postcss: function () {
        return aPostcss;
    },
    vue: {
        loaders: {
            css: "style!css?importLoaders=1!postcss",
            sass: "style!css?importLoaders=2!postcss!sass"
        }
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['','.jsx','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}