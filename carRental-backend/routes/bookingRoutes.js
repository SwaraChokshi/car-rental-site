const express = require("express");
const pool = require("../db");
const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const {
      user_id, car_type, pickup_location, dropoff_location,
      pickup_date, dropoff_date, first_name, last_name,
      phone, age, address, city, zip_code
    } = req.body;

    const result = await pool.query(
      `INSERT INTO bookings (
        user_id, car_type, pickup_location, dropoff_location,
        pickup_date, dropoff_date, first_name, last_name,
        phone, age, address, city, zip_code
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13
      ) RETURNING *`,
      [
        user_id, car_type, pickup_location, dropoff_location,
        pickup_date, dropoff_date, first_name, last_name,
        phone, age, address, city, zip_code
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Get bookings for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM bookings WHERE user_id = $1",
      [req.params.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Admin confirms a booking
router.post("/admin/confirm/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE bookings SET status = 'Confirmed' WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
