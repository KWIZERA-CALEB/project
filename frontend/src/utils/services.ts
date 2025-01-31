import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);


export const login = async (email: string, password: string) => {
    return api.post('/login-user', { email, password });
};

export const logout = async () => {
    return api.post('/logout-user');
};

export const getLoggedInUser = async () => {
    return api.get('/loggedin-user');
};
