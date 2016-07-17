var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';

var config = module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/bld',
        filename: isProduction ? 'app.min.js' : 'app.js',
        output: { "publicPath": "/assets" }
    },
    devServer: {
      port: 8990,
      inline: true,
      publicPath: '/bld',
      host: '0.0.0.0',
      info: true,
      hot: false,
      historyApiFallback: true
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                  presets: ["es2015", "react", "stage-1"]
              }
            },
            { 
              test: /\.styl$/, 
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
            },
            {  
              test: /\.jpg$/,    
              loader: "url-loader?limit=10000&minetype=image/jpg" 
            }
        ],
        resolve: {
          extensions: ['', '.js', '.styl']
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};

if (isProduction) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = config