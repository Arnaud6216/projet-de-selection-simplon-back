const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blagues",
      version: "1.0.0",
      description: "Une API pour générer des blagues",
    },
   
    components: {
      schemas: {
        Blague: {
          type: "object",
          properties: {
            id: { type: "integer" },
            question: { type: "string" },
            answer: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };