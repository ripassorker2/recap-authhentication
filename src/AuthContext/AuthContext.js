import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebae.init";

const auth = getAuth(app);

export const UserConText = createContext();

const AuthContext = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const userAuth = { user, createUser, login, logOut, loader };
  return (
    <UserConText.Provider value={userAuth}>{children}</UserConText.Provider>
  );
};

export default AuthContext;
