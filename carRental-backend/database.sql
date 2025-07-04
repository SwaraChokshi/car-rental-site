CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  car_type VARCHAR(50),
  pickup_location VARCHAR(100),
  dropoff_location VARCHAR(100),
  pickup_date DATE,
  dropoff_date DATE,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone VARCHAR(20),
  age INT,
  address TEXT,
  city VARCHAR(50),
  zip_code VARCHAR(20),
  status VARCHAR(20) DEFAULT 'Pending'
);