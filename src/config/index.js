export * from './ui.js';
import {config as defaultConfig} from './default.js';
import { loadConfig} from './loaders.js';

const loadedConfig = loadConfig();

const config = { ...defaultConfig , ...loadedConfig};

export default config;

