import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadConfig() {
  const configPath = path.join(__dirname, '../config/local.yaml');
  let fileContents = fs.readFileSync(configPath, 'utf8');
  const config = yaml.load(fileContents);

  Object.keys(config).forEach(key => {
    global[key] = config[key];
  });

  return config;
}

try {
  loadConfig();
} catch (e) {
  console.error(`Failed to load config: ${e}`);
  process.exit(1);
}
