// models/Supplier.js

const pool = require("../getPool"); // Import MySQL connection pool

class Supplier {
  static async getSuppliersList() {
    try {
      const query = `
                SELECT name AS supplierName, username AS supplierUsername, company AS supplierCompany, email AS supplierEmail, number AS supplierNumber, address AS supplierAddress
                FROM Suppliers
            `;
      const results = await pool.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  }

  // Other methods...
}

module.exports = Supplier;
