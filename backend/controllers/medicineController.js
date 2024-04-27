// controllers/medicineController.js
const pool = require("../getPool");

async function getAllMedicines(req, res) {
  // Implement logic to retrieve all medicines from the database
  try {
    // Query to retrieve all medicines from the database
    const query = "SELECT * FROM new_medicine";
    const results = await pool.query(query);

    res.json({ medicines: results });
  } catch (error) {
    console.error("Error retrieving medicines:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function addMedicine(req, res) {
  // Implement logic to add a new medicine to the database
  try {
    // Insert the new medicine into the database
    const query =
      "INSERT INTO new_medicine ( Medicine_name, MedicineID, Medicine Group,quantity_in_number, Price,How_to_use, side_effects) VALUES (?, ?, ?, ?, ?, ?, ?)";
    await pool.query(query, [
      Medicine_Name,
      MedicineID,
      Medicine_Group,
      Quantity_in_number,
      Price,
      How_to_use,
      side_effects,
    ]);

    res.status(201).json({ message: "Medicine added successfully" });
  } catch (error) {
    console.error("Error adding medicine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateMedicine(req, res) {
  // Implement logic to update an existing medicine in the database
  const medicineId = req.params.id;
  const { name, price, quantity } = req.body;

  try {
    // Update the existing medicine in the database
    const query =
      "UPDATE new_medicine SET Medicine_name = ?, MedicineID = ?, Medicine_Group = ?, Quantity_in_number = ?, Price = ?, How_to_use = ?, side_effects = ? WHERE id = ?";
    await pool.query(query, [
      Medicine_Name,
      MedicineID,
      Medicine_Group,
      Quantity_in_number,
      Price,
      How_to_use,
      side_effects,
    ]);

    res.json({ message: "Medicine updated successfully" });
  } catch (error) {
    console.error("Error updating medicine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteMedicine(req, res) {
  // Implement logic to delete a medicine from the database
  const medicineId = req.params.id;

  try {
    // Delete the medicine from the database
    const query = "DELETE FROM Medicines WHERE id = ?";
    await pool.query(query, [medicineId]);

    res.json({ message: "Medicine deleted successfully" });
  } catch (error) {
    console.error("Error deleting medicine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllMedicines,
  addMedicine,
  updateMedicine,
  deleteMedicine,
};
