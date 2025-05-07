import { useState,useEffect } from 'react'


import api from "./utils/api.js";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import CurrentUserContext from './contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
      console.log(data); 
    });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.setAvatar(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log(popup);
  }
  
  function handleClosePopup() {
    setPopup(null);
  }


  return (
    
      <div className="page__content">
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
        <Header />
      <Main onOpenPopup={handleOpenPopup}
    onClosePopup={handleClosePopup}
    onUpdateAvatar={handleUpdateAvatar}
    popup={popup} />
      </CurrentUserContext.Provider>
    </div>
    
  )
}

export default App
