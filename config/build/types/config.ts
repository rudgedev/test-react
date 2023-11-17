export type BuildMode = 'development' | 'production';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  app: string;
  entities: string;
  features: string;
  helpers: string;
  pages: string;
  shared: string;
  widgets: string;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}
