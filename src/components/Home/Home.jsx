import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'remixicon/fonts/remixicon.css';
import Counter from "../Counter/Counter";
import Services from "../Services/Services";
import About from "../About/About";
import Team from "../Team/Team";
import Testmonial from "../Testmonial/Testmonial";
import Projects from "../Projects/Projects";
import Hero from "../UI/Hero";
import Contact from "../ContactPage/Contact";



function Home(theme) {

  return (
   

    <>
    <Hero theme={theme} />
     <Counter />
     <Services />
     <About />
     <Projects />
     <Team />
     <Testmonial />
     <Contact />
     

     
     
      
    </>
   );
}
    
   
export default Home;
