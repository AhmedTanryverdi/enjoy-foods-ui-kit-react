import { merge } from "webpack-merge";
import commonConfig from "../webpack.common.mjs";
import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";
import path from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default merge(commonConfig, {
	entry: {
		app: path.resolve(__dirname, "index.tsx"),
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].[contenthash].js",
		chunkFilename: "[id].[contenthash].js",
		publicPath: "auto",
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "hostApp",
			remotes: {
				auth: "auth@http://localhost:3001/remoteEntry.js",
				//payment: "payment@http://localhost:3002/remoteEntry.js",
			},
			shared: {
				react: {
					singleton: true,
					eager: true,
					requiredVersion: '^19.2.1',
				},
				'react-dom': {
					singleton: true,
					eager: true,
					requiredVersion: '^19.2.1',
				},
				'react-router-dom': {
					singleton: true,
					eager: true,
					requiredVersion: '^7.10.1',
				},
				'@reduxjs/toolkit': {
					singleton: true,
					eager: true,
					requiredVersion: '^2.11.1',
				},
				'react-redux': {
					singleton: true,
					eager: true,
					requiredVersion: '^9.2.0',
				},
			},
		}),
	],

	devServer: {
		port: 3000,
		hot: true,
		compress: true,
		open: false,
		historyApiFallback: true,
	},
});
