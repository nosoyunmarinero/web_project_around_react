export default function NewCard() {
    return (
        <form className="profile__edit-form" id="add-card-form" noValidate>
            <input
              type="text"
              className="profile__edit-form-input profile__edit-form-input_name"
              placeholder="Titulo"
              id="title"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error" id="title-error"></span>
            <input
              type="url"
              className="profile__edit-form-input profile__edit-form-input_job"
              placeholder="URL de la imagen"
              id="imageURL"
              required
            />
            <span className="form__input-error" id="imageURL-error"></span>
            
          </form>
    )
}