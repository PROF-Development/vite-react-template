export * from './ui.js';
export * from './base.js';
import {config as defaultConfig} from './defaults';
import { loadConfig} from './loaders.js';

const loadedConfig = loadConfig();

const config = { ...defaultConfig , ...loadedConfig};

export default config;

