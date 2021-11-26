import { createContext, useState } from 'react'

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home";

import { NewRoom } from "./pages/NewRoom";


export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('teste')

  return (
    //forma de criar rotas de forma nova 
    <BrowserRouter>
    <TestContext.Provider value={{value, setValue}}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NewRoom />} path="/rooms/new" />
      </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
