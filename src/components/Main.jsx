import avatar from "../../images/image-profile.png";
import Footer from "./Footer.jsx";

function Main() {
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
          
        </section>
        {/* Contenedor de tarjetas */}
        <div className="element-list__item">
          {/*Aqui aparecen las cards creadas con JS*/}
        </div>
        {/*Footer*/}
        <Footer />
      </main>
    );
}

export default Main;