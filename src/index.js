import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Main from './Main';
import Exhibitions from './pages/Exhibitions';
import Artists from './pages/Artists';
import SignUp from './pages/Signup';
import LogIn from './pages/Login';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import Painting from './pages/Painting';
import Artist from '../src/pages/Artist';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="artists" element={<Artists />} />
            <Route path="artists/:artistId" element={<Artist />} />
            <Route path="exhibitions" element={<Exhibitions />} />
            <Route path="paintings" element={<Paintings />} >
            </Route>
            <Route path="paintings/:paintingId" element={<Painting />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route
              path="*"
              element={
                <main style={{marginTop:'80px', padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
