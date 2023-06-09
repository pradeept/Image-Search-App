import axios from "axios";

let searchImage = async (term)=>{
    
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: " Client-ID "+process.env.REACT_APP_UNSPLASH_KEY
        },
        params:{
            query:term
        }
    });
    return response.data.results;
};

export default searchImage;