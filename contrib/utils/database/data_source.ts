import { BaseEntity, Collection, DataSource, MixedList } from 'typeorm';
const config = require("@settings/config.ts");

// TODO: FIX TYPE
let entities: any = [];

config.APPS.forEach((installedApp: string) => {
    entities.push(...require(`@apps/${installedApp}/models.ts`));
});

export const AppDataSource = new DataSource({
  type: config.DB_TYPE,
  database: 'db.sqlite',
  synchronize: true,
  entities: [...entities],
});
