const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		app: resolve(__dirname, 'src/app.js'),
		index: resolve(__dirname, 'src/index.js')
	},
	output: {
		clean: true,
		path: resolve(__dirname + '/dist'),
		filename: "js/[name].js"
	},
	resolveLoader: {
		modules: ['node_modules', resolve(__dirname, 'loaders')]
	},
	devtool: 'source-map',
	devServer: {
		open: false,
		host: 'localhost',
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: resolve(__dirname, 'node_modules')
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.tpl$/,
				use: [
					'babel-loader',
					{
						loader: 'tpl-loader',
						options: {
							log: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: resolve(__dirname, 'index.html'),
			chunks: [
				'index'
			],
			excludeChunks: ['node_modules']
		})
	]
}
