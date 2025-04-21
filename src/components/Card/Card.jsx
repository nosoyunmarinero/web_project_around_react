import trashIcon from "../../../images/thrashcan.svg";
import heartIcon from "../../../images/heart.svg";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
// import heartIconActive from "../../../images/heart-active.svg";

export default function Card(props) {
  const { name, link /*isLiked*/ } = props.card;
  const { handleOpenPopup } = props; 

  const imageComponent = {
    title: "",
    children: <ImagePopup card={{ name, link }} />
  };
  
  return (
    <div className="element">
      <button className="element__button-image" onClick={() => handleOpenPopup(imageComponent)}>
        <img src={link} alt="Imagen" className="element__image" />
      </button>
      <button className="element__button-delete" id="delete-image-btn">
        <img
          src={trashIcon}
          alt="Delete button"
          className="element__image-delete"
        />
      </button>
      <div className="element__description">
        <p className="element__title" id="card-title">{name}</p>
        <button className="element__button element__button-like">
          <img
            src={heartIcon}
            className="element__like-button"
            alt="Like button"
          />
        </button>
      </div>
    </div>
  );
}