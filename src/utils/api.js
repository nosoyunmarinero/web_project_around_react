class Api {
    constructor(options) {
      this._options = options;
    }
  
    getInitialCards() {
      return fetch(`${this._options.baseUrl}/cards`, {
        headers: {
          authorization: this._options.headers.authorization,
        },
      })
        .then((res) => res.json())
    }
  
    addNewCard() {
      return fetch(`${this._options.baseUrl}/cards`, {
        method: "POST",
        headers: this._options.headers,
        body: JSON.stringify({
          name: this._options.name,
          link: this._options.link,
        }),
      }).then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      });
    }
  
    getUserInfo() {
      return fetch(`${this._options.baseUrl}/users/me`, {
        headers: {
          authorization: this._options.headers.authorization,
        },
      }).then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      });
    }
  
    updateUserInfo(newUserData) {
      return fetch(`${this._options.baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this._options.headers.authorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newUserData.name,
          about: newUserData.job,
        }),
      })
        .then((res) => res.json())
        .finally(() => {});
    }
  
    setAvatar(newAvatarData) {
      return fetch(`${this._options.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          authorization: this._options.headers.authorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: newAvatarData.avatarURL,
        }),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  
    deleteCard(clickedButtonID) {
      return fetch(`${this._options.baseUrl}/cards/${clickedButtonID}`, {
        method: "DELETE",
        headers: {
          authorization: this._options.headers.authorization,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log("Tarjeta eliminada", clickedButtonID);
          clickedButtonID.remove();
        })
        .catch((err) => console.log("Error al eliminar la tarjeta:", err));
    }
  
    changeLikeCardStatus(clickedButtonID, isLiked) {
      const method = isLiked ? "PUT" : "DELETE";
      const body = isLiked ? JSON.stringify({ isLiked: true }) : null;
      return fetch(`${this._options.baseUrl}/cards/${clickedButtonID}/likes`, {
        method,
        headers: {
          authorization: this._options.headers.authorization,
          "Content-Type": "application/json",
        },
        body,
      }).then((res) => res.json());
    }
  
    //Funciones de carga
  
    renderTextLoading(isLoading, saveButtonElement) {
      if (isLoading) {
        saveButtonElement.textContent = "Guardando...";
      } else {
        saveButtonElement.textContent = "Guardar";
      }
    }
  }

  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
    "Content-Type": "application/json",
  },
  })
  
  export default api;