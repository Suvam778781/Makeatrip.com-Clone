import logo from './logo.svg';
import './App.css';
import LandingPage from './Landingpage/LandingPage';
import { FooterPart } from './Landingpage/footer';
import { Draweer } from './Landingpage/Drawer';
import { LoginPage } from './Login&Signup/Login';


// import data from "./Alldata.json"

function App() {
  return (
    <div className="App">
   <LandingPage/>
   {/* <Draweer/> */}
   <LoginPage/>
    </div>
  );
}

export default App;
