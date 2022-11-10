import logo from './logo.svg';
import './App.css';
import LandingPage from './Landingpage/LandingPage';
import { FooterPart } from './Landingpage/footer';
import { Draweer } from './Landingpage/Drawer';


// import data from "./Alldata.json"

function App() {
  return (
    <div className="App">
   <LandingPage/>
   <Draweer/>
    </div>
  );
}

export default App;
