// routes/medicineRoutes.js
const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicineController");

// Define medicine routes
router.get("/allmedicine", medicineController.getAllMedicines);
router.post("/add", medicineController.addMedicine);
router.put("/:id", medicineController.updateMedicine);
router.delete("/:id", medicineController.deleteMedicine);
router.get("/top-selling", medicineController.TopSellingMedicines);
router.get("/shortage", medicineController.MedicineShortage);
router.get("/groups", medicineController.MedicineGroups);

module.exports = router;
