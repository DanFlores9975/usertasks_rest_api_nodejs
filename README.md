# Gestión de tareas de usuario
## Elaboración de una rest api con node js y express para la gestion de tareas de usuarios

Para consultar la rest API de manera online se utilizan los siguientes endpoints
---
* **GET ->** https://warm-hollows-28028.herokuapp.com/api/task
    * Params - **user** (id de usuario).
    * Obtiene una breve descripción de todas las tareas del usuario.
---
* **GET ->** https://warm-hollows-28028.herokuapp.com/api/task/{id}
    * Params - **user**
    * Query string params - **{id}**
    * Obtiene una tarea en especifico del usuario e id de la tarea especificada.
---
* **POST ->** https://warm-hollows-28028.herokuapp.com/api/task
    * Body - Content-Type - **aplication/x-www-form-urlencoded**
    * Body
        - user -> text
        - title -> text
        - description -> text
        - is_completed -> 0-1
        - due_date -> text
        - comments -> text
        - manager -> text
        - tags -> text
    * Crea una nueva tarea del usuario ingresado.
---
* **PUT ->** https://warm-hollows-28028.herokuapp.com/api/task/{id}
    * Body - Content-Type - **aplication/x-www-form-urlencoded**
    * Body
        - title -> text
        - description -> text
        - is_completed -> 0-1
        - due_date -> text
        - comments -> text
        - manager -> text
        - tags -> text
    * Params - **user**
    * Query string params - **{id}**
    * Edita una tarea del usuario ingresado.
---
* **DELETE ->** https://warm-hollows-28028.herokuapp.com/api/task/{id}
    * Params - **user**
    * Query string params - **{id}**
    * Elimina una tarea en especifico del usuario e id de la tarea especificada.
---
* La documentación de los endpoints se encuentra en el siguiente enlace.
    * https://warm-hollows-28028.herokuapp.com/api-doc/
    
    * Sin embargo al probar los endpoints post y put en esta interfaz nos dará un error, puesto que la rest api solo acepta requests en tipo **aplication/x-www-form-urlencoded** y esta interfaz envia la información en texto plano por lo cual, nos retorna dicho error llamado "wrong request" con una respuesta 200

## Recursos y elaboracion del Rest API

Los recursos utilizados para que esta rest api funcionara, son:

* NodeJS (Entorno)
* Express (Framework)
    - Body-parser
* Morgan
* Underscore
* Swagger (Documentador de endpoints)
* Nodemon

A continuación mencionaré cual es la función de cada uno y como instalarlo:

### NodeJS
* Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web.​ Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla.Node.js es similar en su propósito a Twisted o Tornado de Python, Perl Object Environment de Perl, libevent o libev de C, EventMachine de Ruby, vibe.d de D y Java EE de Java existe Apache MINA, Netty, Akka, Vert.x, Grizzly o Xsocket. Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador, sino en el servidor. Node.js implementa algunas especificaciones de CommonJS.7​ Node.js incluye un entorno REPL para depuración interactiva.

- [Instalación de NodeJS](https://nodejs.org/en/)

![Nodejs](https://adrianalonso.es/wp-content/uploads/2014/09/nodejs.png)

### Express (nodeJS)
* Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:

* Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.
A pesar de que Express es en sí mismo bastante minimalista, los desarrolladores han creado paquetes de middleware compatibles para abordar casi cualquier problema de desarrollo web. Hay librerías para trabajar con cookies, sesiones, inicios de sesión de usuario, parámetros URL, datos POST, cabeceras de seguridad y muchos más. Puedes encontrar una lista de paquetes middleware mantenida por el equipo de Express en Express Middleware (junto con una lista de algunos de los paquetes más populares de terceros).
* Para instalar el framework dentro del entorno de nodejs se tiene que que usar el comando **npm i express** dentro de la carpeta del proyecto
* Body-parser Se utiliza para que nuestro framework express pueda leer o comprender todo lo que se le envia desde el campo body,  para instalarlo simplemente se utiliza el comando **npm i body-parser**

* [Pagína oficial de express](https://expressjs.com/)

![Express](https://portafolio-fabricio.web.app/images/skills/express.png)


### Morgan
*  Morgan es un Middleware de nivel de solicitud HTTP. Es una gran herramienta que registra las requests junto con alguna otra información dependiendo de su configuración y el valor predeterminado utilizado. Demuestra ser muy útil durante la depuración y también si desea crear archivos de registro.
* Para instalar esta dependencia se ejecuta el siguiente comando **npm expreso morgan**
* [Guía de morgan](https://es.acervolima.com/que-es-morgan-en-node-js/)

    ![Morgan](https://media.geeksforgeeks.org/wp-content/uploads/20210730163327/Screenshot262.png)

### Underscore
* una biblioteca de JavaScript que ofrece más de 100 funciones útiles para manipular datos. Estas funciones están clasificadas en cinco grupos. Conozcamos algunos ejemplos de cada uno:

    - **Colecciones**. Funciones para recorrer, buscar, filtrar, ordenar, agrupar, contar o hallar el máximo y el mínimo en un conjunto de elementos.
    - **Arrays**. Funciones para manipular arrays: obtener el primer o el último elemento, buscar elementos, hallar uniones o intersecciones entre arreglos, etc.
    - **Funciones**. Funciones para, valga la redundancia, manipular el modo, el evento o el momento en el cual se ejecutará una función.
    - **Objetos**. Funciones para acceder a las propiedades, los métodos y el tipo de dato de un objeto, así como para clonarlo o extenderlo.
    - **Utilidad**. Funciones útiles de uso variado. Nos permiten invocar una función una determinada cantidad de veces, obtener un número aleatorio, depurar cadenas de texto, obtener la hora actual, etc.
* Para la instalación de esta dependencia se utiliza el comando **npm i underscore**
* [Guía de underscore](https://underscorejs.org/)

    ![Underscore](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAC1CAMAAACtbCCJAAAAyVBMVEX///8AKkAAAAAAcbX29PIAGzWGjpRhcHoAIDtfmMQAbbIAbbiHnbH9/f7x8/NESVXr7/IABiIAABk/R1FUXGe2ur+usbfn6usAEiV9g4rGys7L0NRZYGkjLDosNkRnb3g1PUcOGy3Y3N4AABIAAAgAABVJUFt1eoGgpave4eOPlp21ub0WIjEABSMAAA3Aw8YSdbNcY208Q1NiaHEQGiwIFSMAFSmNlJwTHilQVl4eKDN4f4lscngAECmlqa4lMTssMUIRNUiUqroguryfAAAH3UlEQVR4nO2c2XbbOBKG2RW3pjszoGlt1EpTlEwtZqxxlMij2G33zPs/1GAlCa5SX7h9Tv7vRhQIVRV+ogoAnRPHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADOgzmM2Q28RX86zG7Xn5qCHYt8S9G4F0WR79oxOO621Opc+aKt8Puy65Lj8hAdRzjdulV3q3H7j3bDc3glP3fh0LJ9G6uLfS++FsSHzj7z44WqVfLVF7Hs9DfeL4uWDeMH4nyfbbZZ4+CQiEaa396nJqPxn6JpFYyjtOP9V2XycTxI+x1yjoNpPuT41lwNT3fC1rd+zmmLLMncbuiT8jimbt4Gu77RLqg36/dPYbAkSjqunlEeJbxVc/KVAXHdC0dEwUDZcPyYjuPX4euuv6TYmJ72iE674fC1wy822t2ai7TebXbrhFYd0/OVvs6EyQUfoukYdlO//diSpdvTQzxRd/06HO4e76gw2HpZ5oHdMDOyLFd9S5aRkWWvW6LOiL7rQDx6yXdWsugnut2t9GjdgMwQ2WCSjpU6nr72d+rKDalnhjgJUgVT3/7mG62VnTDJR5/Popue+hbQ2BSA/d45j3pZjmPz6KTFTJZB9mP+TFX0Ht06BcZkButMuyQn0BM92ZFLe/+ZOkV6NJZOlesXY3xI96aH96YkYuGibmhalo2ydRn1spD3Y5nL/ypZeAWiuRx8syy82058zI9esZdPN1GxjXe3rcVaDiGLUXVAsigKWSoLbSrL9Z1ffb+JBlncSZb/dbI4B5UWLbJEq5Ow8dArjeCQn5Impu7RHsmWQqZ832ed7uYi0FZZ2Dypvt1Igyy+s85irpPFf7gR/Vtk8f8IhY1uWBzBdjkvD+o1rUCGR5oo36kszEmSc2Wpud9EoyzuPE2jOln44xY53ibLl1B8BKX5rLPL5kTFvNqr+mDJsjhPFidelbO0lUZZnAmdTBh1sqhH2yLLRC1UGypskri3csxeMioO1KNr5TtLIp/k+tsuy5BOl0+XZlmyNKqVZSqVa5HlRS8bMcWWDG6wKoe8fbguNrEfR9exZdnoeda6EvGC3SuvdS20yHKVrFQa1criL4UBj/rTicHXBlJZNqZ2uy9855bbO/h/VNTDaVli51pGk5NlcndUcYaLzLE984wsfIGneHDZjGmRhU9/tVesl2Ukdo4eye21YqMNePLE5U5m1DO7YWfaf6Dls4nf/1LwrlyuS219LcteHoHcaE0LXfXCbubYlvMmXfemj9zp+pIp0yaLozd1DbLo2RJNNWa2LENOMB/RfJd/VNGO7/Fjtcc9W5aZlmUuTX6nxdgcivhsSbFPPDe57cBWOj13j3uGLHo1akiir05x868MrF7WgtHIK5zS2fRAag2uSaKSLV4flCwzYfE5WWZPvr22GLM8l9bnphJrk8VRm7qGkjtzakquMvQkFCiGM02kLu68Ww4pWsXFJjb/okquet732YrWvhLlDL9VzMNqWmeLTqOGBVqsCA0rkftGFcd59+Yh4uOJK+65yajY5K2+Kt+65MZpEJfIIkI5cw/DgsIkjLvKWCYLe3vY1suiNqBNC/Q99Yv3xOsYWbPGNCzdq9zOPSvfWpYtBbq2XCRLuqq3c1paxzcW6FcSmSxqNYrrNv9yb924bzkVlJTsZRblj10Nwd+q7MkW6LHpcpksVWWrmjFZ9Tky48vJItNolr6GssZ4q+JrlGVLb+XIB1IWFtC0NCyffrhWo0/yWJiTxU10eJfIwioXuWqm9vNak349lJeF8fJwqJRlo8+2TbIwfvlUuMlM+gzSdMjRUTljuvLpNtS+0+3cUGfmZbJ0Ks7rNZzSrkxEaUTKyyKWm0OaRDI0ueSyJxqpMmDJYopTmp382W4LtyNaqNsHmpV0YaEV/pgOlm9JXP8aSr+kLyfRdrQ6+92LP6KOqV+vNDLxW7Lwb6OFCc0knb8J6YcujoWXlsyxz0RDuYr7mTb7Bb3qvicKJvYvefwJvZjOUZ/M+PKyRBTIJ1OW5fFPZU/J4mflezI/u+KKGOb0bT2cTAadgJLUiC0Lm3ePJrTbXedp/DwLlrQyenJZertOiqsMpLIwpyfEHND1+HXPzy67OHuX7bBnorBzz5uHndiI68V0198N7oeda76nN089LwtPdznGcPSUORbRb0kXECULXy/GG+50v4mp9B6nmc3bSp4pgtzUtWVxpncLFdzw7qYr+Ba+5I5f3urYNdyJ0yWzDUTLN9fxZ4nyQ6Pb/BK8vV2o5tU8C2B/Uoed0SHb0VqyuEfxpwkWjlLHXTmRXSO5ksV7MU67h4tfvGwn+/1EbvJTr4WMN9+Zq7Hupq0SmQp2D9eTU96f7jmRW9j3upHwH+V05Le9qWjLW2Fe/leudyXd5B2L9kj/XaqryyR3OtFOf3oYnzXFd17AEZvr4q4A8FQ6Ppz7l9WfhP3183OfzA4AaKZBt5scJu0dfzJYcaEEKX/hj2YA/AWY9/u78Y8PQenfTFSy/fT5vfjtA/DrL+edi7b//vRe/PIR+C9kqeJsWT6/kyqf/25FJOfK8umf78Tn3379AJxZW7z//eu96HwEdme9zGXs6icDm18AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgFtb231D8H2zS6UwJPtfbAAAAAElFTkSuQmCC)

### Swagger
* Swagger UI es una de las herramientas atractivas de la plataforma. Para que una documentación sea útil necesitaremos que sea navegable y que esté perfectamente organizada para un fácil acceso. Por esta razón, realizar una buena documentación puede ser realmente tedioso y consumir mucho tiempo a los desarrolladores.

* Utilizando el Swagger UI para exponer la documentación de nuestra API, podemos ahorrarnos mucho tiempo. Con el Swagger UI podremos organizar nuestros métodos e incluso poner los ejemplos que necesitemos.

* Swagger UI utiliza un documento JSON o YAML existente y lo hace interactivo. Crea una plataforma que ordena cada uno de nuestros métodos (get, put, post, delete) y categoriza nuestras operaciones.  Cada uno de los métodos es expandible, y en ellos podemos encontrar un listado completo de los parámetros con sus respectivos ejemplos. Incluso podemos probar valores de llamada
* [Guía de instalación de Swagger](https://swagger.io/)

![Swagger](https://addons.mozilla.org/user-media/previews/thumbs/192/192679.jpg?modified=1622132852)

### Nodemon
* En Node.js, debe reiniciar el proceso para que los cambios surtan efecto. Eso añade un otro paso a su flujo de trabajo para que los cambios surtan efecto. Puede eliminar este paso adicional usando nodemon para reiniciar el proceso automáticamente.

* nodemon es una utilidad de interfaz de línea de comandos (CLI) desarrollada por @rem que envuelve su aplicación Node, vigila el sistema de archivos y reinicia automáticamente el proceso.
* [Mas acerca de nodemon, su instalación y configuración](https://www.digitalocean.com/community/tutorials/workflow-nodemon-es)

    ![Nodemon](https://www.returngis.net/wp-content/uploads/2019/08/nodemon-logo.png)

---
## Desarrollo de la Rest API
Cabe resaltar que los archivos de nuestra ruta fuente son archivos de configuración a exepción de nuestro archivo *tasks.json*, ya que en este archivo se encuentran almacenadas de manera física todas nuestras tareas.

Una vez creado nuestro proyecto e instaladas todas las dependencias, nuestro package.json puede verse tal que así.
~~~javascript
{
  "name": "prueba-tecnica",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "engines": {
    "node": "16.17.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "morgan": "^1.10.0",
    "swagger-jsdoc": "^6.2.5",
    "swagger-ui-express": "^4.5.0",
    "underscore": "^1.13.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
~~~
En esta podemos observar absolutamente todo lo que se esta utilizando en este proyecto.

### **Index.js**
Ahora bien, comprendido todo esto sigamos con nuestro archivo fuente el cual se llama index.js y se encuentra en la carpeta "src".

~~~javascript
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
~~~
En esta primera parte de nuestro código se exportan las dependencias a utilizar en nuestra rest api, ademas de inicializar el documentador de endpoints *swagger* describiendo las configuraciones requeridas para la documentación de los mismos.

Como observamos llenamos los specs requeridos, como el nombre de nuestra api, la versión y en que ruta se encuentran nuestros endpoints, que, para hacerlo mas dinamico, estan guardados en una carpeta llamada *routes* y el nombre del archivo es *routes.js*
~~~javascript 
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
~~~
Pues bien, en este fragmento de nuestro archivo index.js podemos observar como instanciamos nuestro objeto app el cual tiene la dependencia de express();

Ademas, en el siguiente frafmento se muestran los middlewares utilizados, asi mismo especificamos la ruta donde estará almacenada la documentacion de nuestros endpoints de la rest api.

Asi mismo declaramos la ruta que utilizará nuesta rest api y los metodos dentro de nuestro archivo routes.js donde se encuentra todo el codigo de nuestros endpoints.

Tambien inicializamos nuestro servidor enviamos un mensaje en consola de en que puerto esta conectado.

### *tasks.json**
En este apartado observaremos un poco de la estructura de los objetos json que se guardan en nuestra "base de datos", el cual es el siguiente:
~~~javascript
  {
    "id": 1000,
    "title": "Crear una Rest api",
    "description": "Realizar una rest api que permita el funcionamiento de un sistema de gestion de tareas",
    "is_completed": 0,
    "due_date": "18-09-2022",
    "comments": "",
    "manager": "",
    "tags": "",
    "user": 1
  }
~~~
En este objeto podemos observar la estructura base de nuestro objeto json tambien conocido como "task"

### **./routes/routes.js**

En este archivo se encuentra todo el codigo de nuestros endpoints por lo cual es el mas extenso de los anteriores.

Para cada endpoint estare explicando su funcionamiento junto con su sintaxis de documentacion de *swagger*.

Comencemos con las dependencias.
~~~javascript
//Exportamos Router de express para poder darle seguimiento
//En esta parte de la API
const { Router, json } = require("express");
const _ = require("underscore");
const fs = require("fs");
const router = Router();


//Manejo del archivo JSON en memoria virtual
const memoryT = require("../tasks.json");

//Manejo del archivo JSON en memoria fisica
const json_tasks = fs.readFileSync("src/tasks.json", "utf-8");
const tasks = JSON.parse(json_tasks);
~~~
En esta primera parte obtenemos los metodos necesarios como lo son {Router, json} El cual nos permite tener conexion directa con nuestro archivo principal *index.js* para recibir y poder utilizar los metodos en cuestion y la ruta especificada como lo vimos en dicho archivo, tambien el paquete de underscore nos permitira iterar dentro de los archivos json, facilitando la busqueda de elementos, el paquete fs de nodejs nos permite hacer las funciones basicas a un archivo fisico, que en nuestro caso es el archivo tasks.json.

Instanciamos nuestro objeto router para hacer uso de el mismo.

En esta api decidí manejar los objetos de manera fisica y virtual, esto para, si surge algun error, primeramente solo sea en el objeto de la memoria virtual, y este no afecte al archivo fisico, para esto, se cargan los objetos json en memoria y ademas, se prepara el archivo para poder trabajar sobre el, para eso se convierte en un string para poder editarlo de manera mas sencilla, continuamos.

~~~javascript
/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: id of the task (autogenerated)
 *        title:
 *          type: string
 *          description: Title of the task
 *        description:
 *          type: string
 *          description: description of the task
 *        is_completed:
 *          type: integer
 *          description: task completed or not (0-1)
 *        due_date:
 *          type: string
 *          description: due date of the task
 *        comments:
 *          type: string
 *          description: comments about the task
 *        manager:
 *          type: string
 *          description: manager of the task
 *        tags:
 *          type: string
 *          description: tags of the task
 *        user:
 *          type: string
 *          description: owner of the task
 *     
 *      required:
 *        - title
 *        - description
 *        - is_completed
 *        - due_date
 *        - user
 * 
 *        
 * 
 */
~~~
Aquí comenzamos a declarar un nuevo "schema" de swagger poniendo asi mismo todo lo requerido para el mismo, como ya se habia dicho anteriormente, es "schema" se puede encontrar en la siguiente ruta: https://warm-hollows-28028.herokuapp.com/api-doc/  
Para saber mas acerca del funcionamiento de swagger puede consultar la [documentación oficial](https://swagger.io/specification/) de swagger.

### Endpoint _GET obtiene información breve de todas las tareas de un usuario.

~~~javascript
/**
 * @swagger
 * /api/task:
 *  get:
 *    summary: get brief information of all user tasks
 *    tags: [Task]
 *    responses:
 *       200:
 *          description: all tasks
 *          content:
 *            aplication/json:
 *              schema:
 *                 type: 
 *                 items:
 *                   $ref: '#/components/schemas/Task'
 *    default:
 *      description: this user doesnt have tasks
 *    parameters:
 *    - in: query
 *      name: user
 *      description: user id
 * 
 * 
 */


//Primer endpoint "_GET" para obtener las tareas del usuario ingresado.
router.get("/", (req, res) => {
  var user = req.query.user;
  const results = [];

  _.each(memoryT, (task, i) => {
    if (task.user == user) {
      const newTask = {
        id: 0,
        title: "",
        description: "",
        is_completed: false,
        due_date: "",
      };
      newTask.id = task.id;
      newTask.title = task.title;
      newTask.description = task.description;
      newTask.is_completed = task.is_completed;
      newTask.due_date = task.due_date;
      results.push(newTask);
    }
  });
  if(results){
    res.json(results);
  }else{ res.json('this user doesnt have tasks'); }
  
});
~~~

En este endpoint el cual es el primero _GET lo primero que hacemos con swagger es indicar que tipo de metodo es, la respuesta que devuelve ademas de que parametros necesita.

En la parte del **código** podemos observar principalmente que recibimos la petición _GET guardamos los parametros en una variable, la cual es $user, posterior a esto creamos un arreglo temporal que mas adelante observaremos para que funciona.

Ahora bien, se recorre el archivo json en memoria con un metodo de underscore llamado each() que nos permite iterar sobre este y ver cada uno de los elementos, este metodo recibe dos parametros, los cuales son: el objeto individual del objeto, el cual llamaremos task, por ser el singular de tasks y el iterador que es "i".

Hecho esto, revisamos si se encuentra el usuario en nuestro archivo, si este lo encuentra retornamos nuestro arreglo "results" el cual contiene informacion breve de todas las tareas, para terminar, comprueba si "results" se encuentra vacío, si es asi retorna que ese usuario no tiene tareas.

### Endpoint _GET{id} obtiene una tarea en especifico.

~~~javascript
/**
 * @swagger
 * /api/task/{id}:
 *  get:
 *    summary: get information of one user task specifically
 *    tags: [Task]
 *    responses:
 *       200:
 *          description: one task
 *          content:
 *            aplication/json:
 *              schema:
 *                 type:  object
 *                 $ref: '#/components/schemas/Task'
 *    default:
 *      description: this user doesnt have tasks
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: task id
 *    - in: query
 *      name: user
 *      required: true
 *      description: user id
 * 
 * 
 */

//Segundo endpoint "_GET" para obtener una tarea en especifico de un usuario.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  var user = req.query.user;
  _.each(memoryT, (task, i) => {
    if (task.user == user && task.id == id) {
      res.json(task);
    }
  });
  res.json("Wrong request");
});
~~~
Ahora bien, en nuestro segundo endpoint tambien indicamos a swagger que ahora tenemos un {id} y posterior escribimos el request y responce de nuestro endpoint.

En el **código** observamos en nuestro endpoint que requerimos un parametro query string el cual se llama {id} para asi poder encontrar una tarea en especifico, tambien recibimos como parametro {user} el cual es el usuario que es propietario de esta tarea, obtenidas estas variables, recorremos el objeto nuevamente y se coloca un condicional que nos comprueba si existe dicha tarea de dicho usuario, es asi, nos regresa toda la informacion de dicha tarea de dicho usuario, si no es asi, nos envia un mensaje "wrong request".

### Endpoint _POST crea nueva tarea

~~~javascript
/**
 * @swagger
 * /api/task:
 *  post:
 *    summary: create new user task
 *    tags: [Task]
 *    requestBody:
 *       content:
 *         aplication/json:
 *           schema:
 *              type:  object
 *              $ref: '#/components/schemas/Task'
 *    responses:
 *      200: 
 *        description: returns the new task
 * 
 * 
 */


//Tercer endpoint "_POST" para crear y agregar una nueva tarea, en caso de no existir usuario, se crea uno.
router.post("/", (req, res) => {
  const {
    user,
    title,
    description,
    is_completed,
    due_date,
    comments,
    manager,
    tags,
  } = req.body;
  if (
    (title && description && is_completed == 0) ||
    (is_completed == 1 && due_date && user)
  ) {
    const id = memoryT.length + 1000;
    let newTask = {
      id,
      user,
      title,
      description,
      is_completed,
      due_date,
      comments,
      manager,
      tags,
    };
    tasks.push(newTask);
    const json_tasks = JSON.stringify(tasks);
    fs.writeFileSync("src/tasks.json", json_tasks, "utf-8");
    res.json(newTask);
  } else {
    res.json("wrong request");
  }
});
~~~
En este endpoint se le dice a swagger que es un endpoint tipo _post, posterior a esto indicamos lo necesario para este endpoint.

En **Código** observamos que se hace la petición y guardamos todos los datos del body de nuestra petición
y comprobamos que los campos que son obligatorios no esten vacios ademas de que el campo is_completed sea 1 ó 0 si se cumple esta condición le otorgamos un id único, agregamos esta tarea al archivo donde se tienen almacenadas y se retorna la tarea agregada, en caso de que la condición no se cumpla, se envia un mensaje "wrong request".

### Endpoint _PUT editar una tarea existente

~~~javascript
/**
 * @swagger
 * /api/task:
 *  put:
 *    summary: edit once of the user task
 *    tags: [Task]
 *    requestBody:
 *       content:
 *         aplication/json:
 *           schema:
 *              type:  object
 *              $ref: '#/components/schemas/Task'
 *    responses:
 *      200: 
 *        description: returns the new task
 * 
 * 
 */

//Cuarto endpoint "_PUT" que edita una tarea en especifico con nuevos valores.
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    is_completed,
    due_date,
    comments,
    manager,
    tags,
  } = req.body;
  var user = req.query.user;
  _.each(memoryT, (task, i) => {
    if (task.user == user && task.id == id) {
      task.title = title;
      task.description = description;
      task.is_completed = is_completed;
      task.due_date = due_date;
      task.comments = comments;
      task.manager = manager;
      task.tags = tags;
      const json_tasks = JSON.stringify(memoryT);
      fs.writeFileSync("src/tasks.json", json_tasks, "utf-8");
      res.json(task);
    }
  });
  res.json("Wrong request");
});
~~~
En este apartado al igual que en los otros, se le indica a swagger el tipo de petición de la que se trata, ademas de que se requiere.

En **código** se observa como tenemos un query string param que se llama {id} como anteriormente se utilizaba en la petición _GET para obtener una tarea en especifico, ahora se utiliza para buscar una tarea y editarla, tambien solicitamos al usuario, para corroborar que sea el propietario, pues bien, obtenidos estos dos datos, comenzamos su busqueda, si la tarea existe, se edita con los nuevos datos recibidos por el request body se almacena en memoria ya que aqui tambien se edita y sobreescribimos sobre nuestro archivo físico, si esta tarea no se encuentra, nos regresa un mensaje con "wrong request" 

### Endpoint _DELETE elimina una tarea.

~~~javascript

/**
 * @swagger
 * /api/task/{id}:
 *  delete:
 *    summary: delete one user task specifically
 *    tags: [Task]
 *    responses:
 *       200:
 *          description: one less task
 *          content:
 *            aplication/json:
 *              schema:
 *                 type:  object
 *                 $ref: '#/components/schemas/Task'
 *    default:
 *      description: this user doesnt have tasks
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: task id
 *    - in: query
 *      name: user
 *      required: true
 *      description: user id
 * 
 * 
 */

//Quinto endpoint que elimina una tarea en especifico de un usuario.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  var user = req.query.user;
  _.each(memoryT, (task, i) => {
    if (task.user == user && task.id == id) {
      memoryT.splice(i, 1);
      const json_tasks = JSON.stringify(memoryT);
      fs.writeFileSync("src/tasks.json", json_tasks, "utf-8");
      res.json('Tarea eliminada');
    }
  });
});
~~~
En este ultimo apartado de nuevo indicamos a swagger que tipo de petición estamos utilizando y que se requiere.

En **código** observamos que es similar a nuestro metodo _GET y _PUT para obtener una tarea en especifico, ya que tenemos el parametro query string {id} y nuestro parametro {user} esto para corroborar que existe el usuario y la tarea recorriendo todo el archivo, si esta condición se cumple buscamos y se encuentran dichos datos, se sobreescribe el archiv en memoria y el archivo físico y se retorna un mensaje "Tarea eliminada".

### Exportación del modulo router

~~~javascript
//exportacion del modulo ROUTER
module.exports = router;
~~~
Esta es la ultima parte del código pero no menos importante, ya que si no exportamos este modulo, nuestro archivo principal _index.js_ no podria trabajar con los endpoints.

## Despedida
Esto seria todo por mi parte, espero les haya gustado esta implementación de rest api, si observan que se podria mejorar algo o tienen alguna duda del funcionamiento de la misma, me lo pueden hacer saber a mi correo.

danflores9977@gmail.com

Suerte y mucho exito a todos!! 🚀💻🌌