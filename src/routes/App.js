import '../assets/css/App.css';
import '../scss/style.scss'
import React, {Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '../states/store'
import { Login } from '../components/login/login';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
