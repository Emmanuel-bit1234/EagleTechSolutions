import logo from './logo.svg';
import './App.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import {Whoweare} from './components/Whoweare';
import { Whatwedo } from './components/Whatwedo';
import { Footer } from './components/Footer';
import { Contact } from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Whoweare/>
      <Whatwedo/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
