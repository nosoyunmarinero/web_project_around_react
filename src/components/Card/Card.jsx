import React, { useContext  } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import trashIcon from "../../../images/thrashcan.svg";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
// import heartIconActive from "../../../images/heart-active.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;  // Removemos isLiked de la desestructuración
  const { handleOpenPopup } = props;
  const {currentUser} = useContext(CurrentUserContext);

  // Agregamos un estado local para manejar el like
  const imageComponent = {
    title: "",
    children: <ImagePopup card={{ name, link }} />
  };

  const cardLikeButtonClassName = 
    isLiked ? 'element__like-button-active' : 'element__like-button'
  ;
  
  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  
  return (
    <div className="element">
      <button className="element__button-image" onClick={() => handleOpenPopup(imageComponent)}>
        <img src={link} alt="Imagen" className="element__image" />
      </button>
      <button className="element__button-delete" id="delete-image-btn" onClick={handleDeleteClick}>
        <img
          src={trashIcon}
          alt="Delete button"
          className="element__image-delete"
        />
      </button>
      <div className="element__description">
        <p className="element__title" id="card-title">{name}</p>
        <button className={cardLikeButtonClassName} onClick={handleLikeClick}> 
        </button>
      </div>
    </div>
  );
}