import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../Authpage/Authpage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <main className="App">
      { user ? 
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              <Route path='/orders/new' element={<NewOrderPage user={user} />} />
              <Route path='/orders/' element={<OrderHistoryPage />} />
            </Routes>  
          </> 
          : 
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

