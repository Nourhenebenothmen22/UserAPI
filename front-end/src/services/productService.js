import axiosContent from './axiosContent';
const productService = {
  getAllProducts: () => axiosContent.get('/product/get'),
  getById: (id) => axiosContent.get(`/product/get/${id}`) // Correction du nom (casse)
};

export default productService; 