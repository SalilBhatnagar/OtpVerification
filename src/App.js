import './Coustom.css';
import React,{useState} from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Index from './components/Index';
import VarificationForm from './components/UserVarificationNo';
import Otp from './components/UserOtp'
import otpContext from './components/otpContext'
function App() {
const [optTrack,setOptTrack] = useState("")
const [currentMobile,setCurrentMobile] = useState("")
  return (
<otpContext.Provider value={{optTrack,setOptTrack, currentMobile,setCurrentMobile}}>
    <div className="App">
    
        <Router>
          <Route
            exact
            path="/"
            component={Index}
           />  

           <Route
            exact
            path="/VarificationForm"
            component={VarificationForm}
           /> 

           <Route
            exact
            path="/Otp"
            component={Otp}
           />
           
        </Router>  
    </div>
</otpContext.Provider>
  );
}

export default App;
