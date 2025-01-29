import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
})

export const login = async (email: string, password: string) => {
    return api.post('/login-user', { email, password });
};

export const logout = async () => {
    return api.post('/logout-user');
};

export const getLoggedInUser = async () => {
    return api.get('/loggedin-user');
};