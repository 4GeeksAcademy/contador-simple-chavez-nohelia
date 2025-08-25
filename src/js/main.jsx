import React from 'react'
import ReactDOM from 'react-dom/client'
// components
import Home from './components/Home.jsx';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

//  el root 
const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0; // empieza a contar en 0

// cada 1 segundo aumenta y vuelve a mostrar en pantalla (renderiza)
setInterval(() => {
  counter++; // suma 1 al contador
  root.render(
    <Home seconds={counter} />
  );
}, 1000); // ejecutara la funcion cada segundo