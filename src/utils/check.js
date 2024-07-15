import config from '../config/loaders.js'

const databaseHOST = config.database.host;
console.log(`хост базы данных: ${databaseHOST}`);