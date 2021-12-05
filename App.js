
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Products from "./components/Products";

const App = () => {
  return (
    <div style={{height:'100vh'}}>
    <Nav/>
    <Banner/>
    <Intro/>
    <About/>
    <Products/>
    <Contact/>
   
    </div>
  )
}

export default App;

