import AboutUs from './pages/AboutUs'
import Activies from './pages/Activies'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'

import Navbar from './static/Navbar'
import LanguageSelector from './components/LanguageSelector'
import {Routes,Route} from 'react-router-dom'
import Footer from './static/Footer'
import "./App.css";
const App = () => {
  return (
    <div className='bg-light'>
{/*     <Navbar/>
    <LanguageSelector/>
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/Activities' element={<Activies />} />
      <Route path='/ContactUs' element={<ContactUs />} />
    
    </Routes>
    <Footer/> */}
    </div>
   
  )
}

export default App
