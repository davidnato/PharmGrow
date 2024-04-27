// salesRoutes.js

const express = require("express");
const router = express.Router();
const Sale = require("../models/sale.js");

// Route to create a new sale
router.post("/sales", async (req, res) => {
  try {
    const { customerName, medicines } = req.body;
    const newSale = await Sale.createSale(customerName, medicines);
    res
      .status(201)
      .json({ message: "Sale created successfully", saleId: newSale.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating sale" });
  }
});

// Route to retrieve all sales
router.get("/sales", async (req, res) => {
  try {
    const sales = await Sale.getAllSales();
    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching sales" });
  }
});

// Route to retrieve a sale by ID
router.get("/sales/:id", async (req, res) => {
  const saleId = req.params.id;
  try {
    const sale = await Sale.getSaleById(saleId);
    if (!sale) {
      return res.status(404).json({ message: "Sale not found" });
    }
    res.json(sale);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching sale details" });
  }
});

// Route to update a sale by ID
router.put("/sales/:id", async (req, res) => {
  const saleId = req.params.id;
  const { customerName, medicines } = req.body;
  try {
    await Sale.updateSale(saleId, customerName, medicines);
    res.json({ message: "Sale updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating sale" });
  }
});

// Route to delete a sale by ID
router.delete("/sales/:id", async (req, res) => {
  const saleId = req.params.id;
  try {
    await Sale.deleteSale(saleId);
    res.json({ message: "Sale deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting sale" });
  }
});

module.exports = router;
