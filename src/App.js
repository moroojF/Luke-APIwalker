import './App.css';

import React, { useState } from "react";
import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  const [myResult, setMyResult] = useState([]);

  const createResult = myItem => {
    setMyResult(myItem)
  }
  return (
    <>
      <MyNav createResult={createResult}/>
      <Router>
        
        {
          myResult.hasOwnProperty("height")?<People path="/:myCategory/:myId" myResult={myResult}/>:
          <Planets path="/:myCategory/:myId" myResult={myResult}/>
        }
      </Router>
    </>
  );
}

export default App;
