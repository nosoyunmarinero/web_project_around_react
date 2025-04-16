import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "../Form/NewCard/NewCard.jsx";

import avatar from "../../../images/image-profile.png";
import Footer from "../Footer/Footer.jsx";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

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
            
          </div>
          <div className="profile__info">
            <h2 className="profile__name" id="profile-name">Francisco Romero</h2>
            <h3 className="profile__about" id="profile-job">Web Developer</h3>
           
          </div>
          <button aria-label="Add Card" className="profile__add-button" id="add-button-open" onClick={() => handleOpenPopup(newCardPopup)}>+</button>
        </section>
        {/* Contenedor de tarjetas */}
        <div className="element-list__item">
          {/*Aqui aparecen las cards creadas con JS*/}
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
