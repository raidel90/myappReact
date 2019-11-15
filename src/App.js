import React from 'react';
import logo from './logo.svg';
import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import Head from './head';
import Body from './contenido/body';
import Bodydos from './contenido/bodydos';
import { BrowserRouter, Route, Switch, Redirect,SwitchProps } from 'react-router-dom';
import Errores from "./contenido/errores";

function App() {
  return (
    <div className="App">
 <Head></Head>

 <BrowserRouter>
   
     <Switch>
       
        <Route
          path="/body"
          component={Body} />
        <Route
          path="/bodydos"
          component={Bodydos} />
          
        <Route component={Errores} />
      </Switch>

  </BrowserRouter>
    
      
 
    </div>
  );
}

export default App;
