import './app.css';
import React,{useState} from 'react';
import searchImage from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App(){
    const [imageList,setImageList] = useState([]);
    async function handleSubmit(term){
        let result = await searchImage(term)
        setImageList(result);
    }   

    return <div className='container'> 
        <h1>Image Search App</h1>
        <SearchBar search={handleSubmit}/>
        <ImageList images={imageList}/>
        
    </div>
}

export default App;