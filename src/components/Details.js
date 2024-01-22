
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header.js';
import Footer from './Footer.js';
import './Details.css';
import arrowLeft from '../images/arrow_left.png';
import arrowRight from '../images/arrow_right.png';

const Details = () => {
  const { id } = useParams();
  const [appartements, setAppartements] = useState(null);

  const [num_image_encours, setNumImageEncours] = useState(0);
  const [translate, setTranslate] = useState(0);

  const divImagesRef = useRef(null);

 //les fonctions--------------

  function image_suivante() {
    if (num_image_encours < appartements.pictures.length - 1) {
      setNumImageEncours(num_image_encours + 1);
      setTranslate(translate - 75);
    }
  }

  function image_precedente() {
    if (num_image_encours > 0) {
      setNumImageEncours(num_image_encours - 1);
      setTranslate(translate + 75);
    }
  }

function deroulerDescrption(){
  
 const contenuDescription = document.querySelector('.contenu-description');
 const fleche = document.getElementById('flecheDescription');

 if(contenuDescription.style.height =="0px"){

  contenuDescription.style.height="auto";
  fleche.style.rotate="90deg";
  } else {
    contenuDescription.style.height= "0px" ;
    fleche.style.rotate="-90deg";
 }
 
}


function deroulerEquipement(){
  
  const contenuEquipement = document.querySelector('.contenu-equipements');
  const fleche = document.getElementById('flecheEquipement');
  
  if(contenuEquipement.style.height =="0px"){
    
    contenuEquipement.style.height="auto";
    fleche.style.rotate="90deg";
   }else{
    contenuEquipement.style.height= "0px" ;
    fleche.style.rotate="-90deg";
  }
  
  
}



//---------------------------------------------------
  useEffect(() => {
    if (divImagesRef.current) {
      divImagesRef.current.style.transform = `translateX(${translate}vw)`;
    }
  }, [translate]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setAppartements(data);
        } else {
          alert("Aucune réponse.");
        }
      })
      .catch(error => console.error("Erreur lors de la requête :", error));
  }, [id]);



  useEffect(() => {
    if (appartements) {
      const tagContainer = document.getElementById('Tag');
  
      while (tagContainer.firstChild) {
        tagContainer.removeChild(tagContainer.firstChild);
      }
  
      appartements.tags.forEach((tagText) => {
        const p_tag = document.createElement('p');
        p_tag.textContent = tagText; // Ajoutez le texte du tag
  
        p_tag.className = 'tag';
  
        tagContainer.appendChild(p_tag);
      });
    }
  }, [appartements]);
  


  useEffect(() => {
    if (appartements) {
     
      const ratingContainer = document.getElementById('Rating');
  
     
      while (ratingContainer.firstChild) {
        ratingContainer.removeChild(ratingContainer.firstChild);
      }
  
     
      const rating = parseFloat(appartements.rating);
  
    
      for (let e = 1; e <= 5; e++) {
        const star = document.createElement('span');
        star.textContent='★'
        // star.classList.add('fa', `fa-star`);
        star.className = e <= rating ? 'star-filled' : 'star-outline';
        ratingContainer.appendChild(star);
      }
    }
  }, [appartements]);
  


  useEffect(() => {
    if (appartements) {
      const carouselImages = document.getElementById('carousel-images');

      while (carouselImages.firstChild) {
        carouselImages.removeChild(carouselImages.firstChild);
      }

      appartements.pictures.forEach((picture, index) => {
        const image = document.createElement('img');
        image.src = picture;
        image.className = 'images';

        const divimage = document.createElement('div');
        divimage.className = 'divimages';
        divimage.id = `divimage-${index}`;
        divimage.appendChild(image);
        carouselImages.appendChild(divimage);
      });
    }
  }, [appartements]);

  if (appartements) {
    return (
      <div>
        <Header />
        <div id="carousel">
          <div id='carousel-images' ref={divImagesRef}>
            {/* Contenu de la div d'images */}
          </div>
          <div className="carousel-buttons">
            <button onClick={image_precedente} className="carousel-prev">
              <img src={arrowLeft} alt="left"></img>
            </button>
            <button onClick={image_suivante} className="carousel-next">
              <img src={arrowRight} alt="left"></img>
            </button>
          </div>
          <div className='carousel-indicateur'>
            <p>{num_image_encours + 1}/{appartements.pictures.length}</p>
          </div>
        </div>
        <section className="descriptions">
                <div>
                    <h3>{appartements.title}</h3>
                    <p>{appartements.location}</p> 
                 </div>
                <div className='host'>
                    <p>{appartements.host.name}</p>
                    <img src={appartements.host.picture}></img>
                </div>
        </section>
        <section className='Tag-Rating'>
               <div id='Tag' ></div>
               <div id='Rating'></div> 
        </section>
                
        <section className='Description-Equipements'>

               <div id='Description' >
                   <div className='label-description'>Description
                   <img id="flecheDescription" onClick={deroulerDescrption} src={arrowLeft}></img>
                   </div>
                   <div className='contenu-description'>{appartements.description}</div>
               </div>

               <div id='Equipements'>
                   <div className='label-equipements'>Equipements
                   <img id="flecheEquipement" onClick={deroulerEquipement} src={arrowLeft}></img>
                   </div>
                   <div className='contenu-equipements'>
                 <ul>
                    {appartements.equipments.map((equip, index) => (
                     <li key={index}>{equip}</li>
                     ))}
                 </ul>
                   </div>



                </div> 

        </section>
                
        
        
        <Footer />
      </div>
    );
  }

  return null;
};

export default Details;
