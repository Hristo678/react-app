
import React, {useState, useEffect, useContext} from 'react';
import './App.css';

import UserContext from './Context';

const App = (props) => {

const [loggedIn, setLoggedIn] = useState(null)
const [user, setUser] = useState(null)
const context = useContext(UserContext)
 

  const logIn = (user)=>{
    setLoggedIn(true)
    setUser(user)
  }

  const logOut = ()=>{
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setLoggedIn(false)
    setUser(null)
    
  }

  useEffect(() =>{
    if(document.cookie){
      const email = sessionStorage.getItem('email')
      const password = sessionStorage.getItem('password')
      logIn({email, password})
    }
  },[loggedIn])

  

  return (
    <UserContext.Provider value={{
      loggedIn,
      user,
      logIn,
      logOut
    }}>
      
        {props.children}
    </UserContext.Provider>
  )
  
}

export default App;
