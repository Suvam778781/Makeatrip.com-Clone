import logo from './logo.svg';
import './App.css';
import LandingPage from './Landingpage/LandingPage';
import { FooterPart } from './Landingpage/footer';
import { Draweer } from './Landingpage/Drawer';
import { LoginPage } from './Login&Signup/Login';
import { Package, PackageText } from './PackagePages/Package';
import Allroutes from './Allroutes.jsx/Allroutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init()
  return (
    <div className="App">
  <Allroutes/>
    </div>
  );
}

export default App;
