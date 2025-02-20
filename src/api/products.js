import axios from 'config/axios';

export const getProducts = async (category = '') =>
    axios.get(`/products/${category && `/category/${category}`}`);

export const getProduct = async (id) => axios.get(`/products/${id}`);

export const getCategories = async () => axios.get('/products/categories');
