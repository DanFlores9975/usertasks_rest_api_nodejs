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

//exportacion del modulo ROUTER
module.exports = router;
