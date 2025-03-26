import axiosContent from './axiosContent';
const getCategorie=()=>{
return axiosContent.get('/categorie/get')
}
export default {getCategorie}