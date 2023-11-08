import axios from "axios";

const API_KEY="a273610b79c67aab8bf52a7c3a6ecca0"
const API_BASE_URL ='https://api.themoviedb.org/3/movie/550';

const client = axios.create({
    baseURL: API_BASE_URL,
    params:  {api_key: API_KEY}
});

export const searchMovies = async(query: string)=>{
    try{
        const response  = await client("/search/movie",{
            params: {query,},
        });
        if(response.data && response.data.results){
            return response.data.results;
        }
        else{
            console.error("Couldn't get the data");
        }
    }catch(error){
        console.error(error);
        return [];
    }
}