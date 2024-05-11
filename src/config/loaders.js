import localYaml from './local.yaml';

const config = {};

export function loadConfig() {
  Object.assign(config, localYaml);
  console.log('Конфигурация успешно загружена:', config);
}

export function getConfig() {
  return config;
}