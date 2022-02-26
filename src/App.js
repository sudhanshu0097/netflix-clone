import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Movie from './Movie';
import Profile from "./Profile"
import Tv from './Tv';

function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
 
useEffect(()=>
{
  const unsubscribe=auth.onAuthStateChanged((userAuth)=>
  {
    if(userAuth)
    {
      console.log(userAuth)
      const created=userAuth.metadata.creationTime.split(" ")
      console.log(created)
      dispatch(login(
        {
          uid:userAuth.uid,
          email:userAuth.email,
          created:created
        }));
    }else 
    {
      dispatch(logout())
     

    }
  })
  return unsubscribe
},[dispatch])

  return (
    <div className="app">
     

     <Routes>
       <Route path='/profile' element={<Profile></Profile>}></Route>
       <Route path='/' element={!user?<LoginScreen/> : <HomeScreen />}></Route>
       <Route path='/tv' element={!user?<LoginScreen></LoginScreen> :<Tv></Tv>}></Route>
       <Route path='/movie' element={!user?<LoginScreen></LoginScreen> :<Movie></Movie>}></Route>
       
     </Routes>
      
    
    </div>
  );
}

export default App;
