import closeIcon from "../../../../images/Close-Icon.svg";

export default function Popup(props) {
    const { onClose, title, children} = props;
    return (
        <div className="popup" id="modal-avatar">
        <button className="profile__close-button" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Cerrar"
            id="avatar-button-close"
            className="profile__close-icon"
          />
        </button>
          <header className="profile__edit-form-header">
            {title}
          </header>
          {children}
          <button
            id="save-button"
            className="profile__edit-form-button profile__edit-form-button_save"
          >
            Guardar
          </button>
        </div>
    )
}