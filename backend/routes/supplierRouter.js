// routes/supplierRouter.js

const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

// Route to get list of suppliers with required information
router.get("/list", supplierController.getSuppliersList);

// Other routes...

module.exports = router;
