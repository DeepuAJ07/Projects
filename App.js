import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Details from './Components/Details';
import Card from './Components/Card';
import BusinessCard from './Components/BusinessCard';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Banner/>
   <Details/>
 <Card/>
 <BusinessCard/>
    </Router>
    <Footer/>
    </>
 
  );
}

export default App;
