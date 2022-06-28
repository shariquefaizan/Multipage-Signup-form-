import React from 'react'

import './App.css';
import Firstpage from './Component/Firstpage.jsx';
import Secondpage from './Component/Secondpage'
import Pages from './Component/Pages'
import Fourthpage from './Component/Fourthpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preview from './Component/Preview';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Firstpage/>} />
          <Route path='/Secondpage' element={<Secondpage/>} />
          <Route path='/Thirdpage'   element={<Pages/>} />
          <Route path='/Fourthpage' element={<Fourthpage/>} />
          
          <Route path='/preview' element={<Preview/>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
