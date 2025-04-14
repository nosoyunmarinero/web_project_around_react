 import { useState } from 'react'



import logo from "../images/header-logo.svg";
import avatar from "../images/image-profile.png";

function App() {
  return (
    
      <div className="page__content">
      <header className="header">
        <img
          src={logo}
          alt="Logo Around the U.S."
          className="logo header__logo"
        />
      </header>

      {/*CONTENT*/}
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
          
        </section>
        {/* Contenedor de tarjetas */}
        <div className="element-list__item">
          {/*Aqui aparecen las cards creadas con JS*/}
        </div>
        {/*Footer*/}
        <footer>
          <p className="footer">© 2025 Around The U.S.</p>
        </footer>
      </main>
            {/*Template*/}
      <template className="elements" id="template-selector">
        <div className="element">
          <button className="element__button-image" id="open-image">
            <img src="" alt="Imagen" className="element__image" />
          </button>
          <button className="element__button-delete" id="delete-image-btn">
            <img
              src="../images/thrashcan.svg"
              alt="Delete button"
              className="element__image-delete"
            />
          </button>
          <div className="element__description">
            <p className="element__title" id="card-title"></p>
            <button className="element__button element__button-like">
              <img
                src="../images/heart.svg"
                className="element__like-button"
                alt="Like button"
              />
            </button>
          </div>
        </div>
      </template>
    </div>
  )
}

export default App
