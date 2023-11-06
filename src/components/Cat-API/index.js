import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const CatComponent = () => {
  const [catUrl, setCatUrl] = useState(''); // State to store cat image URL
    useEffect(() => {
        getCat(); // Fetch cat image when the component mounts
        return () => {};
    }, []); // Empty dependency array ensures this effect runs once after initial render

  const getCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCatUrl(data[0].url); // Update the cat image URL in the state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img className="Cat-container" src={catUrl} alt="Cat" />
      <p/>
      <Button className="Switch-button" color="secondary" variant="outlined" onClick={() => {getCat()}}>
        Generar nuevo Gato
      </Button>
    </div>
  );
};

export default CatComponent;


