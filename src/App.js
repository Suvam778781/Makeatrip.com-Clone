import logo from './logo.svg';
import './App.css';
import LandingPage from './Landingpage/LandingPage';
import { FooterPart } from './Landingpage/footer';
import { Draweer } from './Landingpage/Drawer';
import { LoginPage } from './Login&Signup/Login';
import { Package, PackageText } from './PackagePages/Package';
import Allroutes from './Allroutes.jsx/Allroutes';
function App() {
  return (
    <div className="App">
   {/* <Draweer/> */}
   
  <Allroutes/>
    </div>
  );
}

export default App;
