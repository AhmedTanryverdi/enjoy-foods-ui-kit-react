import * as path from "node:path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/",
		clean: true,
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
	},

	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},

			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},

			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},

			// Изображения и шрифты
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[hash][ext][query]",
				},
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public" ,"index.html"),
		}),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css",
		}),
	],

	devServer: {
		static: {
			directory: path.resolve(__dirname, "public"),
		},
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true, // для React Router
		compress: true,
		client: {
			// показывает ошибки в браузере
			overlay: true,
		},
	},

	// Общие настройки для Module Federation (shared)
	optimization: {
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
				},
			},
		},
	},
};
