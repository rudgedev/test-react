import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config';

import type webpack from 'webpack';

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    app: path.resolve(__dirname, 'src', 'app'),
    entities: path.resolve(__dirname, 'src', 'entities'),
    features: path.resolve(__dirname, 'src', 'features'),
    helpers: path.resolve(__dirname, 'src', 'helpers'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    shared: path.resolve(__dirname, 'src', 'shared'),
    widgets: path.resolve(__dirname, 'src', 'widgets'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
