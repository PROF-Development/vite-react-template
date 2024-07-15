import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadConfig() {
    const yamlFilePath = path.resolve(__dirname, '../src/config/local.yaml');
    const yamlFileContents = fs.readFileSync(yamlFilePath, 'utf8');
    return yaml.load(yamlFileContents);
}

export default loadConfig;
