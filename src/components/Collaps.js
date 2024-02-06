import React, { useState, useEffect, useRef } from 'react';
import arrowLeft from '../images/arrow_left.png';


const Collaps = (props) => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const contenuDescription = descriptionRef.current;
    const fleche = document.getElementById(props.id);

    if (contenuDescription && fleche) {
       
      if (isCollapsed) {
        contenuDescription.style.height = "300px";
        contenuDescription.style.maxHeight = "300px";
        fleche.style.transform = "rotate(90deg)";
      } else {
        contenuDescription.style.height = "";
        contenuDescription.style.maxHeight = "0px";
        fleche.style.transform = "rotate(-90deg)";
      }
    }
  }, [isCollapsed, props.id]);

  const deroulerCompo = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='Description'>
      <div className='label-description'>
        {props.label}
        <img className='btn' id={props.id} onClick={deroulerCompo} src={arrowLeft} alt='fleche' />
      </div>
      <div ref={descriptionRef} className={props.className}>
        {props.description}
      </div>
    </div>
  );
};

export default Collaps;
