// models/Medicine.js

const pool = require("../getPool"); // Import MySQL connection pool

class Medicine {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static async createMedicine(name, price, quantity) {
    try {
      const query =
        "INSERT INTO new_medicine ( Medicine_name, MedicineID, Medicine Group,quantity_in_number, Price,How_to_use, side_effects) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const result = await pool.query(query, [name, price, quantity]);
      return { id: result.insertId, name, price, quantity };
    } catch (error) {
      throw error;
    }
  }

  static async updateMedicine(id, name, price, quantity) {
    try {
      const query =
        "UPDATE updateMedicine SET name = ?, price = ?, quantity = ? WHERE id = ?";
      await pool.query(query, [name, price, quantity, id]);
    } catch (error) {
      throw error;
    }
  }

  static async deleteMedicine(id) {
    try {
      const query = "DELETE FROM new_medicine WHERE id = ?";
      await pool.query(query, [id]);
    } catch (error) {
      throw error;
    }
  }

  static async getAllMedicines() {
    try {
      const query = "SELECT * FROM Medicines";
      const results = await pool.query(query);
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async getMedicineById(id) {
    try {
      const query = "SELECT * FROM Medicines WHERE id = ?";
      const results = await pool.query(query, [id]);
      return results[0]; // Assuming there's only one medicine with the given ID
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Medicine;
