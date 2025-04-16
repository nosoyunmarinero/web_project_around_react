export default function EditAvatar() {
return (
<form className="profile__edit-form" id="avatar-form" noValidate>
            
            <input
              type="url"
              className="profile__edit-form-input profile__edit-form-input_name"
              placeholder="https://ejemplo.com/imagen-ejemplo.jpg"
              id="avatarURL"
              required
            />
            <span className="form__input-error" id="avatarURL-error"></span>
        
          </form>
)
}