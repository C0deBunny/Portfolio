const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "assets/[name][ext]",
	},
	mode: "development",
	devServer: {
		static: [{ directory: path.resolve(__dirname, "public") }, { directory: path.resolve(__dirname, "dist") }],
		hot: true,
		open: false,
		watchFiles: ["src/**/*"],
		liveReload: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				use: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			cache: false,
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "public", to: "." }],
		}),
	],
}
