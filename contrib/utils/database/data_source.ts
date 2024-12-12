import { DataSource } from 'typeorm';
const config = require("@settings/config.ts");

let entities: any = [];

config.CONTRIB_APPS.forEach((installedApp: string) => {
    if (config.DATABASE_EXCLUDE_APPS.includes(installedApp)) {
        return;
    }
    const appModels = require(`@contrib/apps/${installedApp}/models.ts`);
    entities.push(...Object.values(appModels)); // Push exported classes/functions
});

// Dynamically require models from `APPS`
config.APPS.forEach((installedApp: string) => {
    const appModels = require(`@apps/${installedApp}/models.ts`);
    entities.push(...Object.values(appModels)); // Push exported classes/functions
});

// Create the AppDataSource
export const AppDataSource = new DataSource({
    type: config.DB_TYPE,
    database: 'db.sqlite',
    synchronize: true,
    entities: entities, // Assign the collected entities
});
