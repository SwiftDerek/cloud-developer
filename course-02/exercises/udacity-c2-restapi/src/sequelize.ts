import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

const c = config;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  username: c.postgres.username,
  password: c.postgres.password,
  database: c.postgres.database,
  host: c.postgres.host,

  dialect: c.postgres.dialect,
  storage: ':memory:',
});
