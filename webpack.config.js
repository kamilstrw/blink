const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); 
const path = require('path');

const PRODUCTION = process.env.NODE_ENV === "production";

const extractSass = new ExtractTextPlugin({
    filename: "main.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	devtool: PRODUCTION ? false : "cheap-inline-module-source-map",
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'www'),
		filename: 'bundle.js'
	},
	watch: true,
	devServer:
	{
		contentBase: path.join(__dirname, "www"),
		port: 9001,
		compress: true
	},
	module: {
		rules: [
			{
	        	test: /\.jsx?$/,
	        	loader: 'babel-loader',
	        	exclude: /node_modules/,
	        	query: 
	     		  {
	       			presets: [ "es2017", "react"],
	        		plugins: [ "transform-runtime", "transform-decorators-legacy", "transform-class-properties" ]
	     		  }
	     	},
			{
				test: /\.scss?$/,
				use: extractSass.extract({
					use: [{
			            loader: "css-loader"
			            }, {
			            loader: "sass-loader"
		            }],
		            fallback: "style-loader"
		        })
				
			},
		    {
		        test: /\.(woff|woff2|eot|ttf|svg)$/,
			    exclude: /node_modules/,
			    use: {
			        loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]'
			      }
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
	      template: "./src/index.html",
	      filename: "index.html"
	    }),
	    extractSass
	],
	resolve: {
		alias: {
			"Components": path.resolve(__dirname, "src", "js", "Components"),
			"Pages": path.resolve(__dirname, "src", "js", "Pages"),
			"Styles": path.resolve(__dirname, "src", "scss"),
			"Fonts": path.resolve(__dirname, "src", "Fonts")
		}   
	}
}