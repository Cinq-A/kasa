import './Apropos.css';
import img2 from '../images/IMG2.png';
import Collaps from './Collaps';



const tableau = [
    { desc: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.', 
      label: 'Fiabilité', 
      className: 'contenu-description-1', 
      id: 'flecheDescription-1' },
    { desc: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.', 
      label: 'Respect', 
      className: 'contenu-description-2', 
      id: 'flecheDescription-2' },
    { desc: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.', 
      label: 'Service', 
      className: 'contenu-description-3', 
      id: 'flecheDescription-3' },
    { desc: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.', 
      label: 'Sécurité', 
      className: 'contenu-description-4', 
      id: 'flecheDescription-4' },

  ];  




const Apropos = () => {

    return (
<section>
        <div>
           < img className="AccueilIMG" src={img2} alt="logo-kasa"/>
        </div>
        
            <section className='Collapses'>
                  {tableau.map((item, index) => (
                            <Collaps
                                key={index}
                                label={item.label}
                                className={item.className}
                                id={item.id}
                                description={item.desc}
                             />
                     ))}
         </section>
  
</section>
    );
};

export default Apropos;
