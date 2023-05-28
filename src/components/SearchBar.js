import './search-bar.css';
import React,{useState} from 'react';

function SearchBar(props){
    const [searchText,setSearchText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        const term = searchText;
        props.search(term);
        setSearchText("");
    }

    function handleChange(e){
        const val = e.target.value;
        setSearchText(val);
    }
    return <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <label>Enter Search Term</label>
            <input type='text' value={searchText} onChange={handleChange}/>
        </form>
       
    </div>
}

export default SearchBar;