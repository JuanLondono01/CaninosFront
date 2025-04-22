import axios from 'axios';
const url = `${import.meta.env.VITE_BASE_URL}/login`


export async function login(data) {
    try {
        const response = await axios.post(url, data, {withCredentials: true});
        return response;
    } catch (error) {
        console.error(error);
    }
}
