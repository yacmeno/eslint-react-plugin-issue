var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: path.join(__dirname, "src", "index.jsx"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	devServer: {
		stats: "errors-only",
	},
};
