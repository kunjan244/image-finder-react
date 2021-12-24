import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '24929555-da455dc5a5b340500fafa3923';



export const getImages =(text, count) =>{
    try{
 const data = axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
    return data;
}catch(error){
        console.log(error);
    }
}