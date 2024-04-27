// routes/medicineRoutes.js
const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicineController");

// Define medicine routes
router.get("/", medicineController.getAllMedicines);
router.post("/add", medicineController.addMedicine);
router.put("/:id", medicineController.updateMedicine);
router.delete("/:id", medicineController.deleteMedicine);

module.exports = router;
