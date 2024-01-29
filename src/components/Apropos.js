import React, { useEffect , useState} from 'react';
import './Apropos.css';
import img2 from '../images/IMG2.png';
import arrowLeft from '../images/arrow_left.png';




   



const Apropos = () => {


function derouler(){  
   
                
               const Bouttons=document.querySelectorAll('.btn');

                console.log(Bouttons)
                for(let i = 0; i<Bouttons.length; i++){
                                Bouttons[i].addEventListener('click', function(){
                                
                                const contenuDescription = document.querySelector(`.contenu-description-${i}`);
                                const fleche = document.getElementById(`flecheDescription-${i}`);
                                    
                                        if(contenuDescription.style.height ===""){
                                            console.log("if"+Bouttons[i])
                                    contenuDescription.style.height="150px";
                                    contenuDescription.style.maxHeight="150px";
                                    
                                    fleche.style.rotate="90deg";
                                    }  
                                    
                                else {
                                    console.log("else"+Bouttons[i])
                                    contenuDescription.style.height= "" ;
                                    contenuDescription.style.maxHeight="0px";
                                    fleche.style.rotate="-90deg";
                                    }
                    })
                }
                     
};




    return (
<section>
        <div>
           < img className="AccueilIMG" src={img2} alt="logo-kasa"/>
        </div>
        <section className='Collapses'>

               <div className='Description' >
                   <div className='label-description'>Fiabilité
                    <img className='btn' id="flecheDescription-0"  onClick={derouler} src={arrowLeft} alt='fleche'></img>
                   </div>
                   <div className='contenu-description-0'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                   </div>
               </div>
               <div className='Description' >
                   <div className='label-description'>Respect
                   <img className='btn' id="flecheDescription-1" onClick={derouler} src={arrowLeft} alt='fleche'></img>
                   </div>
                   <div className='contenu-description-1'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
               </div>

               <div className='Description' >
                   <div className='label-description'>Service
                   <img className='btn' id="flecheDescription-2" onClick={derouler} src={arrowLeft} alt='fleche'></img>
                   </div>
                   <div className='contenu-description-2'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
               </div>

               <div className='Description' >
                   <div className='label-description'>Sécurité
                   <img className='btn' id="flecheDescription-3" onClick={derouler} src={arrowLeft} alt='fleche'></img>
                   </div>
                   <div className='contenu-description-3'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
               </div>

        </section>
                
        
        
        
        
        </section>
    );
};

export default Apropos;
