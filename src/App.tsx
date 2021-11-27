import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home";
import { NewRoom } from "./pages/NewRoom";

import {AuthContextProvider } from '../src/contexts/AuthContext'




function App() {

  return (
    //forma de criar rotas de forma nova 
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NewRoom />} path="/rooms/new" />
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
