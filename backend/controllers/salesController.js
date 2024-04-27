const Sale = require("../models/Sale"); // Replace with your actual model path

exports.createSale = async (req, res) => {
  const { medicineId, quantity, price, discount, customerId } = req.body;

  // Input validation
  if (!medicineId || !quantity || !price || !customerId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newSale = await Sale.createSale(
      medicineId,
      quantity,
      price,
      discount,
      customerId
    );
    res
      .status(201)
      .json({ message: "Sale created successfully", saleId: newSale.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating sale" });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.getAllSales();
    res.json(sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching sales" });
  }
};

exports.getSaleById = async (req, res) => {
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
};

exports.updateSale = async (req, res) => {
  const saleId = req.params.id;
  const { medicineId, quantity, price, discount, customerId } = req.body;

  // Input validation
  if (!medicineId || !quantity || !price || !customerId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await Sale.updateSale(
      saleId,
      medicineId,
      quantity,
      price,
      discount,
      customerId
    );
    res.json({ message: "Sale updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating sale" });
  }
};

exports.deleteSale = async (req, res) => {
  const saleId = req.params.id;

  try {
    await Sale.deleteSale(saleId);
    res.json({ message: "Sale deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting sale" });
  }
};
