import React from 'react';
import logo from './logo.svg';
import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import Head from './head';
import Body from './contenido/body';
import Bodydos from './contenido/bodydos';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Errores from "./contenido/errores";

function App() {
  return (

 <BrowserRouter>
        <div className="App">
<Head></Head>

     <switch>
       
        <Route
          path="/body"
          component={Body} />
        <Route
          path="/bodydos"
          component={Bodydos} />
          
          <Route component={Errores} />
      </switch>
    </div>

  </BrowserRouter>
    
      
 
  );
}

export default App;
