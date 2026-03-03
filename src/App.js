import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");



  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
     setAlert(null);
    },1500)
  }
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor= "#042743"
      showAlert("Dark mode enabled", "Success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor= "white"
       showAlert("light mode enabled", "Success");
    }
  }



  return (
    <> 
    <Router>
    <Navbar title="Text-Utils" about="About Us" mode = {mode}  toggleMode={toggleMode}  />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
      
     <Route exact path="/about" element = {<About mode = {mode}/>} />
     <Route exact path= "/" element = {<TextForm  showAlert = {showAlert} heading="Enter your text and Analyze"  mode = {mode} />} />
   </Routes>
   </div>
     </Router>
   
    </>
  );
}

export default App;
