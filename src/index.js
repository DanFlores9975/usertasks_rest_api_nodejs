const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
//para documentar los endpoints con swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

swaggerSpec = {
  definition:{
    openapi: "3.0.0",
    info:{
      title: "Rest API with nodeJS & express",
      version: "1.0.0"
    }
  },
  apis:[`${path.join(__dirname, "./routes/*.js")}`],
};

const app = express();

//Configuracion del servidor.
app.set("port", process.env.PORT || 3000); //Asignamos el puerto con el que se trabajará en caso de nube o local.

//middlewares
app.use(morgan("dev")); //para ver de donde provienen y cuales son las peticiones.
app.use(express.json()); //Para Poder utlizar archivos json en la API.
app.use(bodyParser.urlencoded({extended:true})); //para leer los datos simples para posterior procesarlos.
app.use('/api-doc',swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpec)));//Declaramos la ruta donde se mostrará la documentación


//Rutas ordenadas en un archivo.
app.use("/api/task", require("./routes/routes.js"));

//Inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
