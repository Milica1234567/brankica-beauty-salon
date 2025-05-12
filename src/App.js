import './App.css';
import Contact from './contact/Contact';
import Header from './header/Header';
import Home from './home/Home'
import Services from './services/Services';
import About from './about/About'
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/usluge' element={<Services/>}></Route>
          <Route path='/kontakt' element={<Contact/>}></Route>
          <Route path='/o nama' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
