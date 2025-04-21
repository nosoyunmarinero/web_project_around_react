import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "../Form/NewCard/NewCard.jsx";
import EditProfile from "../Form/EditProfile/EditProfile.jsx";
import EditAvatar from "../Form/EditAvatar/EditAvatar.jsx";
import Card from "../Card/Card.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";


import avatar from "../../../images/image-profile.png";
import editIcon from "../../../images/edit-button.svg";
import Footer from "../Footer/Footer.jsx";


const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const avatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> }; 


  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log(popup);
  }
  
  function handleClosePopup() {
    setPopup(null);
  }
    return (
        <main className="content">
        {/*Profile*/}
        <section className="profile" id="profile">
          <div className="profile__avatar-container">
            <img src={avatar} alt="Imagen de perfil." className="profile__avatar" />
            <button className="profile__avatar-edit-button" id="avatar-edit-button" onClick={()=> handleOpenPopup(avatarPopup)}>
              <img
                src={editIcon}
                alt="Editar avatar"
                className="profile__avatar-edit-icon"
              />
            </button>
            
          </div>
          <div className="profile__info">
            <h2 className="profile__name" id="profile-name">Francisco Romero</h2>
            <h3 className="profile__about" id="profile-job">Web Developer</h3>
            <button id="edit-button-open" className="profile__edit-button" onClick={() => handleOpenPopup(editProfilePopup)}>
              <img src={editIcon} alt=" Boton editar" />
            </button>
          </div>
          <button aria-label="Add Card" className="profile__add-button" id="add-button-open" onClick={() => handleOpenPopup(newCardPopup)}>+</button>
        </section>
        {/* Contenedor de tarjetas */}
        <div className="element-list__item">
          {/*Aqui aparecen las cards creadas con JS*/}
          {cards.map((card) => (
      <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
    ))}
        </div>
        {/*Footer*/}
        <Footer />
        {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      </main>
    );
}
