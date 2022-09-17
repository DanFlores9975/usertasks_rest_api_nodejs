const express = require("express");
const morgan = require("morgan");
const app = express();

//Configuracion del servidor.
app.set("port", process.env.PORT || 3000); //Asignamos el puerto con el que se trabajará en caso de nube o local.

//middlewares
app.use(morgan("dev")); //para ver de donde provienen y cuales son las peticiones.
app.use(express.json()); //Para Poder utlizar archivos json en la API.
app.use(express.urlencoded({ extended: false })); //para leer los datos simples para posterior procesarlos.

//Rutas ordenadas en un archivo.
app.use("/api/task", require("./routes/routes.js"));

//Inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
