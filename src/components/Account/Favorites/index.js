/**
 * IMPORTS
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * STYLES
 */
import '../AccountApp/style.css';

const Favorites = ({ userFavs }) => {

  const userFavList = userFavs.map(userFav =>     
    <li className="cards_item" key={ userFav.idAnnonce }>
      <div className="card">
        <div className="card_image">
          <img src={ userFav.pictureAnnonce }/>
        </div>
        <div className="card_content" >
          <h3 className="card_title">{ userFav.titleAnnonce }</h3>
          <p className="card_text">{ userFav.categoryAnnonce }</p>
          <p className="card_text"><FontAwesomeIcon icon={faMapMarkerAlt} /> { userFav.locationAnnonce }</p>
          <a href={'/annonces/' + userFav.idAnnonce}><button className="btn card_btn">Voir</button></a>
        </div>
      </div>
    </li>
  )

  return (
    <div className="resultgrid-acc">  
      <h1>Mes favoris</h1>      
      <ul className="cards">     
        { userFavList }
      </ul>
    </div>
  );
};

/**
 * EXPORT
 */
export default Favorites;