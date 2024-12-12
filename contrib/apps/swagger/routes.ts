import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '@contrib/apps/swagger/config';

const express = require('express');
const config = require('@settings/config.ts');
const appConfig = require('./app.config.ts');


const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

console.log(`Swagger Docs available at http://${config.HOST}:${config.PORT}/${appConfig.router_name}/api-docs`);

module.exports = app;