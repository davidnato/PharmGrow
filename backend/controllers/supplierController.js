// controllers/supplierController.js

const Supplier = require("../models/Supplier");

exports.getSuppliersList = async (req, res) => {
  try {
    const suppliersList = await Supplier.getSuppliersList();
    res.json(suppliersList);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching suppliers list" });
  }
};

// Other controller functions...
