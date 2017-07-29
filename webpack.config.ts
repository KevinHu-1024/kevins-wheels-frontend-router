import * as webpack from 'webpack';
import * as path from 'path';
declare var __dirname;

const config: webpack.Configuration = {
  entry: './index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },
};

export default config;
