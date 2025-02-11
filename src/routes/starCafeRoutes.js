const express = require ("express");
const router = express.Router();
const starCafeControllers = require("./controllers/starCafeController");

router.get ("/", starCafeControllers.listarCafe);
router.post ("/", starCafeControllers.adicionarCafe);
router.get("/:id", starCafeControllers.buscarCafe);
router.delete("/:id", starCafeControllers.removerCafe);