// // backend/controllers/customerController.js

// const pool = require('../db');

// const getCustomers = async (req, res) => {
//   try {
//     const { page = 1, limit = 20, search = '', sortBy = 'created_at' } = req.query;
//     const offset = (page - 1) * limit;

//     const query = `
//   SELECT * 
//   FROM customers 
//   WHERE customer_name ILIKE $1 OR location ILIKE $2 
//   ORDER BY created_at ${sortBy === 'asc' ? 'ASC' : 'DESC'}
//   LIMIT $3 OFFSET $4`;



//   const result = await pool.query(query, [`%${search}%`, `%${search}%`, limit, offset]);

//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching customers:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// module.exports = { getCustomers };
const pool = require('../db');

const getCustomers = async (req, res) => {
  try {
    const { page = 1, limit = 20, search = '', sortBy = 'date_asc' } = req.query;
    const offset = (page - 1) * limit;

    let orderByColumn, orderByDirection;

    // Determine sorting column and direction based on sortBy value
    if (sortBy === 'date_asc') {
      orderByColumn = 'created_at';
      orderByDirection = 'ASC';
    } else if (sortBy === 'date_desc') {
      orderByColumn = 'created_at';
      orderByDirection = 'DESC';
    } else if (sortBy === 'time_asc') {
      orderByColumn = 'created_at';
      orderByDirection = 'ASC';
    } else if (sortBy === 'time_desc') {
      orderByColumn = 'created_at';
      orderByDirection = 'DESC';
    } else {
      orderByColumn = 'created_at';
      orderByDirection = 'ASC';
    }

    const query = `
      SELECT 
        sno, 
        customer_name, 
        age, 
        phone, 
        location, 
        TO_CHAR(created_at, 'YYYY-MM-DD') AS date, 
        TO_CHAR(created_at, 'HH24:MI:SS') AS time
      FROM 
        customers 
      WHERE 
        customer_name ILIKE $1 OR 
        location ILIKE $2 
      ORDER BY 
        ${orderByColumn} ${orderByDirection}
      LIMIT 
        $3 OFFSET $4`;

    const result = await pool.query(query, [`%${search}%`, `%${search}%`, limit, offset]);

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getCustomers };
