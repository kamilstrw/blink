const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({filename: "plugins.css"});
const webpack = require('webpack'); 
const path = require('path');

const PRODUCTION = process.env.NODE_ENV === "production";

const extractSass = new ExtractTextPlugin({
    filename: "main.css"
});

module.exports = {
	devtool: PRODUCTION ? false : "cheap-inline-module-source-map",
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'bundle.js'
	},
	watch: true,
	devServer:
	{
		contentBase: path.join(__dirname, 'assets'),
		port: 3000,
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
	       			presets: [ "es2017", "stage-0", "react"],
	        		plugins: [ "transform-runtime", "transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread"]
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
				test: /\.css?$/,
				use: extractCSS.extract(["css-loader"])			
			},
		    {
		        test: /\.(woff|woff2|eot|ttf|svg)$/,
			    exclude: /node_modules/,
			    use: {
			        loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]'
			      }
		    },
		    {
		        test: /\.png$/,
		        use: 'url-loader?name=images/[name].[ext]&limit=8192&mimetype=image/png'
		    },
		    {
		        test: /\.jpe?g$/,
		        use: 'url-loader?name=images/[name].[ext]&limit=8192&mimetype=image/jpg'
		    },
		    {
		        test: /\.gif$/,
		        use: 'url-loader?limit=8192&mimetype=image/gif'
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
	      template: "./src/index.html",
	      filename: "index.html"
	    }),
	    extractSass,
	    extractCSS
	],
	resolve: {
		alias: {
			"Components": path.resolve(__dirname, "src", "js", "Components"),
			"Pages": path.resolve(__dirname, "src", "js", "Pages"),
			"Styles": path.resolve(__dirname, "src", "scss"),
			"Fonts": path.resolve(__dirname, "src", "Fonts"),
			"Store": path.resolve(__dirname, "src", "js", "Store"),
			"Classes": path.resolve(__dirname, "src", "js", "Classes"),
			"Images": path.resolve(__dirname, "src", "Images")
		}    
	}
}