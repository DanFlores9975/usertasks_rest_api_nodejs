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
  res.json(results);
});

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
      completed,
      due_date,
      comments,
      manager,
      tags,
    };
    tasks.push(newTask);
    const json_tasks = JSON.stringify(tasks);
    fs.writeFileSync("src/tasks.json", json_tasks, "utf-8");
    res.json(memoryT);
  } else {
    res.json("wrong request");
  }
});


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

//Quinto endpoint que elimina una tarea en especifico de un usuario.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  var user = req.query.user;
  _.each(memoryT, (task, i) => {
    if (task.user == user && task.id == id) {
      memoryT.splice(i, 1);
      const json_tasks = JSON.stringify(memoryT);
      fs.writeFileSync("src/tasks.json", json_tasks, "utf-8");
      res.json(memoryT);
    }
  });
});

//exportacion del modulo ROUTER
module.exports = router;
