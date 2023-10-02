import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [compteur, setCompteur] = useState(0);
  const [element, setElement] = useState('');
  const [listeCourses, setListeCourses] = useState([]);

  const ajouterElement = () => {
    if (element.trim() !== "") {
      setListeCourses([...listeCourses, element]);
      setElement('');
    }
  };

  return (
    <div>
      {/* section pour le nom/prenom */}
      <div>
        <h2>Je suis le composant parent</h2>
        <label>
          Votre nom:
          <input 
            type="text" 
            value={nom} 
            placeholder='Votre Nom'
            onChange={(e) => setNom(e.target.value)} 
          />
        </label>
        <label>
          Prénom:
          <input 
            type="text" 
            value={prenom} 
            onChange={(e) => setPrenom(e.target.value)} 
          />
        </label>
        <ChildComponent nom={nom} prenom={prenom} />

        {/* Section pour le compteur */}
        <div>
          <h3>Compteur</h3>
          <button 
            onClick={() => setCompteur(compteur + 1)}
          >
            Compteur = {compteur}
          </button>
        </div>
      </div>

      {/* Section pour la liste de courses */}
      <div>
        <h3>Liste de courses</h3>
        <input 
          type="text" 
          value={element}
          placeholder="Elément à ajouter..."
          onChange={(e) => setElement(e.target.value)}
        />
        <button onClick={ajouterElement}>Ajouter</button>
        <ul>
          {listeCourses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
