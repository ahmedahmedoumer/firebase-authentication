// src/App.js
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import  SignIn from '../Authentication/SignIn';
import { Alert } from "antd";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const domain = email.split('@')[1];
        if (domain === 'ienetworks.com') {
          setUser(user);
        } else {
          auth.signOut();
          setError('You must sign in with a company email (ienetworks.com).');
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signOut = () => {
    auth.signOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
      <div>
        <h1>My App</h1>
            {user ? (
              <div>
                <p>Welcome, {user.displayName}</p>
                <button onClick={signOut}>Sign out</button>
              </div>
            ) : (
              <SignIn />
            )}
      </div>
  );
};

export default Home;
