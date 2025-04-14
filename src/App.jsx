 //import { useState } from 'react'



import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    
      <div className="page__content">
        <Header />
      {/*CONTENT*/}
      <Main />
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
