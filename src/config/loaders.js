import localYaml from './local.yaml';



export function loadConfig() {
  const config = Object.assign({}, localYaml);
  if(config.DEBUG){
  console.log('Конфигурация успешно загружена:', config);
  }
  return config;
}
