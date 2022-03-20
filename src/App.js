import React, { useState } from 'react';
import Cards from './component/Cards/Cards';
import Navbar from './component/Navbar/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  let [videosData,setVideosData] = useState([]); 

  return (
    <div>
      <Container>
        <Navbar setVideosData = {setVideosData}/>
        <Cards videosData = {videosData}/>
      </Container>
    </div>
  );
}

export default App;
