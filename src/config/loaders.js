import localYaml from './local.yaml';

export const config = {};

export function loadConfig() {
  Object.assign(config, localYaml);
  if(config.DEBUG){
  console.log('Конфигурация успешно загружена:', config);
  }
}
