import { useEffect, useState, useContext } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "../Form/NewCard/NewCard.jsx";
import EditProfile from "../Form/EditProfile/EditProfile.jsx";
import EditAvatar from "../Form/EditAvatar/EditAvatar.jsx";
import Card from "../Card/Card.jsx";
//import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import Footer from "../Footer/Footer.jsx";
import api from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";


// import avatar from "../../../images/image-profile.png";
import editIcon from "../../../images/edit-button.svg";




export default function Main({popup, onOpenPopup, onClosePopup,onUpdateAvatar}) {
  const [cards, setCards] = useState([]);
  const {currentUser} = useContext(CurrentUserContext);
  

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const avatarPopup = { title: "Editar avatar", children: <EditAvatar onUpdateAvatar={onUpdateAvatar}/> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> }; 


useEffect(() => {
  api.getInitialCards().then((data) => {
    setCards(data);
  });
}, []);

async function handleCardLike(card) {
  const isLiked = card.isLiked;
  
  // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
  await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
         state.map((currentCard) =>
           currentCard._id === card._id ? newCard : currentCard));
  }).catch((error) => console.error(error));
}

async function handleCardDelete(card) {
await api.deleteCard(card._id).then(() => {
  setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
})
}



    return (
        <main className="content">
        {/*Profile*/}
        <section className="profile" id="profile">
          <div className="profile__avatar-container">
            <img src={currentUser.avatar} alt="Imagen de perfil." className="profile__avatar" />
            <button className="profile__avatar-edit-button" id="avatar-edit-button" onClick={() => onOpenPopup(avatarPopup)}>
              <img
                src={editIcon}
                alt="Editar avatar"
                className="profile__avatar-edit-icon"
              />
            </button>
            
          </div>
          <div className="profile__info">
            <h2 className="profile__name" id="profile-name">{currentUser.name}</h2>
            <h3 className="profile__about" id="profile-job">{currentUser.about}</h3>
            <button id="edit-button-open" className="profile__edit-button" onClick={() => onOpenPopup(editProfilePopup)}>
              <img src={editIcon} alt=" Boton editar" />
            </button>
          </div>
          <button aria-label="Add Card" className="profile__add-button" id="add-button-open" onClick={() => onOpenPopup(newCardPopup)}>+</button>
        </section>
        {/* Contenedor de tarjetas */}
        <div className="element-list__item">
          {/*Aqui aparecen las cards creadas con JS*/}
          {cards.map((card) => (
      <Card key={card._id} card={card} handleOpenPopup={onOpenPopup} onCardLike={handleCardLike} onCardDelete={handleCardDelete}
      
      />
    ))}
        </div>
        {/*Footer*/}
        <Footer />
        {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      </main>
    );
    
  }