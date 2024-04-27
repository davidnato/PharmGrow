// model/sale.js

const pool = require("../getPool"); // Import MySQL connection pool

class Sale {
  constructor(customerName, medicines) {
    this.customerName = customerName;
    this.medicines = medicines;
  }

  async save() {
    try {
      // Start transaction
      await pool.query("START TRANSACTION");

      // Insert sale details into database
      const insertSaleQuery = "INSERT INTO Sales (customer_name) VALUES (?)";
      const saleResult = await pool.query(insertSaleQuery, [this.customerName]);
      const saleId = saleResult.insertId;

      // Insert sale items (medicines) into database
      const insertSaleItemsQuery =
        "INSERT INTO SaleItems (sale_id, medicine_id, quantity) VALUES (?, ?, ?)";
      for (const { medicineId, quantity } of this.medicines) {
        await pool.query(insertSaleItemsQuery, [saleId, medicineId, quantity]);
      }

      // Commit transaction
      await pool.query("COMMIT");

      return saleId;
    } catch (error) {
      // Rollback transaction on error
      await pool.query("ROLLBACK");
      throw error;
    }
  }
}

module.exports = Sale;
