import { type IBuildOptions } from './types/config';

import type webpack from 'webpack';

export function buildResolvers({ paths }: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src,
      '@app': paths.app,
      '@entities': paths.entities,
      '@features': paths.features,
      '@pages': paths.pages,
      '@widgets': paths.widgets,
      '@shared': paths.shared,
    },
  };
}
