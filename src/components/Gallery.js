import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then(response => response.json())
      .then(data => {
        if (data) {
          setAppartements(data);
        } else {
          alert("Aucun tableau n'est retourné en reponse.");
        }
      })
      .catch(error => console.error("Erreur lors de la requête :", error));
  }, []);

  return (
    
    <div className='gallery'>
     
        {appartements.map(appartement => (
          <Link key={appartement.id} to={`/Details/${appartement.id}`}>
          <div className='appart'> 
          
          <img src={appartement.cover} alt={appartement.title}></img>
          <p >{appartement.title}</p>
          
          </div>
          </Link>
        ))}
     
     
          
     
     
    </div>
    
  );
};

export default Gallery;
