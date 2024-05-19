export * from './ui.js';
export * from './base.js';
import {config as defaultConfig} from './defaults';
import { loadConfig , config as loadedConfig} from './loaders.js';

loadConfig();

const config = { ...defaultConfig , ...loadedConfig};

export default config;

