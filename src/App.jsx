import { useState,useEffect } from 'react'


import api from "./utils/api.js";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import CurrentUserContext from './contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
     
    });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  return (
    
      <div className="page__content">
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
        <Header />
      <Main />
      </CurrentUserContext.Provider>
    </div>
    
  )
}

export default App
