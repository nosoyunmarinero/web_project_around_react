import React, { useRef } from 'react';

export default function EditAvatar({onUpdateAvatar}) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatarURL: avatarRef.current.value
    });
  }
return (
<form className="profile__edit-form" id="avatar-form" noValidate onSubmit={handleSubmit}>
            
            <input
              type="url"
              className="profile__edit-form-input profile__edit-form-input_name"
              placeholder="https://ejemplo.com/imagen-ejemplo.jpg"
              id="avatarURL"
              ref = {avatarRef}
              required
            />
            <span className="form__input-error" id="avatarURL-error"></span>
            <button
            id="save-button"
            className="profile__edit-form-button profile__edit-form-button_save"
          >
            Guardar
          </button>
          </form>
)
}