export default function EditProfile() {
    return (
        <form className="profile__edit-form" id="profile-form" noValidate>
        <input
          type="text"
          className="profile__edit-form-input profile__edit-form-input_name"
          placeholder="Nombre"
          id="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error" id="name-error"></span>
        <input
          type="text"
          className="profile__edit-form-input profile__edit-form-input_job"
          placeholder="Acerca de mí"
          id="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error" id="job-error"></span>
        <button
            id="save-button"
            className="profile__edit-form-button profile__edit-form-button_save"
          >
            Guardar
          </button>
      </form>
    )
}