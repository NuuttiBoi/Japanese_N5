import axios from 'axios';

const API_URL = 'http://localhost:5000/api/words'; // Change to your server's URL in production
export const fetchWords = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch words:', error);
        throw error;
    }
};