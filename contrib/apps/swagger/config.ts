import swaggerJsdoc from 'swagger-jsdoc';
const config = require('@settings/config.ts');

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple API application documented with Swagger',
    },
    servers: [
      {
        url: `http://${config.HOST}:${config.PORT}`,
      },
    ],
  },
  apis: [
    '../../**/routes.ts'
  ], // Define where your route files are located
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerDocs;
