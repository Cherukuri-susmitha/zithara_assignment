// frontend/src/api.js

const API_URL = 'http://localhost:5000/api'; // Assuming backend is running on port 5000

export const getCustomers = async (page, limit, search, sortBy) => {
  const url = `${API_URL}/customers?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
