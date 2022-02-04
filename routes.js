const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/animales",      cors(), controller.readAnimales);   // Read All
router.get    ("/animales/:id",  cors(), controller.readAnimal);    // Read
router.delete ("/animales/:id",  cors(), controller.deleteAnimal);  // Delete
router.put    ("/animales/:id",  cors(), controller.updateAnimal);  // Update
router.post   ("/animales",      cors(), controller.createAnimal);  // Create

router.get    ("/personal",     cors(), controller.readPersonas);  // Read All
router.get    ("/personal/:id", cors(), controller.readPersona);   // Read
router.delete ("/personal/:id", cors(), controller.deletePersona); // Delete
router.put    ("/personal/:id", cors(), controller.updatePersona); // Update
router.post   ("/personal",     cors(), controller.createPersona); // Create

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/articulos",     cors(), controller.readArticulos);  // Read All
router.get    ("/articulos/:id", cors(), controller.readArticulo);   // Read
router.delete ("/articulos/:id", cors(), controller.deleteArticulo); // Delete
router.put    ("/articulos/:id", cors(), controller.updateArticulo); // Update
router.post   ("/articulos",     cors(), controller.createArticulo); // Create

module.exports = router;

