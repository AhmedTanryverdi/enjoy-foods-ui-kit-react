import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { merge } from 'webpack-merge';
import commonConfig from '../webpack.common.mjs';
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default merge(commonConfig, {
    entry: path.resolve(__dirname, "src",'index.tsx'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[id].[contenthash].js',

        // Обязательна для Module Federation
        library: {
            type: 'module',
        },
        // Чтобы remoteEntry.js был доступен по корневому пути
        publicPath: 'http://localhost:3001/',
    },

    plugins: [

        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                "./AuthModule":  path.resolve(__dirname, "src",'index.tsx'),
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
        static: {
            directory: path.resolve(__dirname, "../public"), // папка со статикой
        },
        port: 3001,
        host: 'localhost',
        hot: true,
        compress: true,
        open: false,
        historyApiFallback: true,
        client: {
            overlay: true,
        },
        // Разрешаем CORS для загрузки remoteEntry.js из host-app
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        },
    },

    // Для корректной работы ES-модулей в браузере
    experiments: {
        outputModule: true,
    },
});
