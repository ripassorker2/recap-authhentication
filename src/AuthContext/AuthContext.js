import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebae.init";

const auth = getAuth(app);

export const UserConText = createContext();

const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();
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

  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const userAuth = { user, createUser, login, logOut, loader, googleSignIn };
  return (
    <UserConText.Provider value={userAuth}>{children}</UserConText.Provider>
  );
};

export default AuthContext;
