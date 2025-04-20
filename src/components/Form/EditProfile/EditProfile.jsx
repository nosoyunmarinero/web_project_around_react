export default function EditProfile() {
    return (
        <form class="profile__edit-form" id="profile-form" novalidate>
        <input
          type="text"
          class="profile__edit-form-input profile__edit-form-input_name"
          placeholder="Nombre"
          id="name"
          minlength="2"
          maxlength="40"
          required
        />
        <span class="form__input-error" id="name-error"></span>
        <input
          type="text"
          class="profile__edit-form-input profile__edit-form-input_job"
          placeholder="Acerca de mí"
          id="job"
          minlength="2"
          maxlength="200"
          required
        />
        <span class="form__input-error" id="job-error"></span>
      </form>
    )
}