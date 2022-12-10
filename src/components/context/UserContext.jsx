import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../firebase";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

  let [user, setUser] = useState(null);

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : 'login');
    })

    return () => {
      unsub();
    }

  }, [])

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
