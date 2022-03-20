import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './SearchBox.css';

const SearchBox = ({setVideosData}) => {

    let [searchEntry, setSearchEntry] = useState(''); 

    const searchBoxHandler = async () =>{
        
        if(searchEntry === ""){
            // console.log('Enter input');
        }else{
            const output = await axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchEntry}&numResults=9`);
            setVideosData(output.data.results);
        }
    }

    useEffect(() => {
        searchBoxHandler();
        // console.log(searchEntry);
    },[searchEntry]);

    return(
        <div>
            <input 
                type="text"
                onChange={(e) => {setSearchEntry(e.target.value)}} 
                placeholder='search...'
            />
        </div>
    )
}

export default SearchBox;