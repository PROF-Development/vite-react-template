import fs from 'fs'; 
import yaml from 'js-yaml'; 
import path from 'path'; 
import { fileURLToPath } from 'url'; 
 
 
const loadConfig = (() => { 
  const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
  const configPath = path.join(__dirname, 'local.yaml'); 
  try { 
    console.log(`Загрузка конфигурации из: ${configPath}`); 
    let fileContents = fs.readFileSync(configPath, 'utf8'); 
    return yaml.load(fileContents); 
  } catch (e) { 
    console.error(`Ошибка при загрузке конфигурации: ${e}`); 
    process.exit(1); 
  } 
})(); 
 
export default loadConfig;