import React, {useState, useEffect} from 'react';
import Home from './page/Home.jsx';
// import Signup from './page/Signup';
import SignUp from './Authentication/SignUp';
import  SignIn from './Authentication/SignIn';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>             
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<SignUp/>}/>
               <Route path="/signin" element={<SignIn/>}/>
               <Route path="/signOut" element={<SignIn/>}/>

            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;