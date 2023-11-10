import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'remixicon/fonts/remixicon.css';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/Counter/Counter";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Testmonial from "./components/Testmonial/Testmonial";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";


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
     <Hero theme={theme} />
     <Counter />
     <Services />
     <About />
     <Team />
     <Testmonial />
     <Footer />
     
    </>
  );
}

export default App;
