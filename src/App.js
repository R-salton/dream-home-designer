import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'remixicon/fonts/remixicon.css';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Home from "./components/Home/Home";


function App() {

  const [theme,setTheme] = useState('');
const toggleTheme = ()=>{
  theme === '' ? setTheme('dark-theme') : setTheme('');
}

useEffect(()=>{
  document.body.className = theme
},[theme])

  return (
   

    <>
    
     <Header theme={theme} toggleTheme={toggleTheme}/>

     <Routes>
     <Route path="/" element={<Home  theme={theme} />} />
    <Route path="/:id" element={<ProjectDetails />} />
     </Routes>
     <Footer />

     
     
      
    </>
   );
}
    
   
export default App;
