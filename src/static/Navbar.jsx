import React from 'react'
import logo from '../assets/logo.jpg'
import {useTranslation} from "react-i18next";
const Navbar = () => {
  const {t} = useTranslation();
  const {WASSETRUST,Home,Activities,AboutUs,ContactUs} = t("Navbar");
  //style={{justifyContent:'end'}}
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 mb-5  " >
    <div className="container-fluid  text-white " style={{backgroundColor:"#0F56A4"}}>
   <div className="px-5  text-white"><img src={logo} alt="Wassetrustlogo"  className='' width="120" hight='10' /><a className="navbar-brand px-3 text-white fw-bold  fs-3 text-xl" href="">{WASSETRUST}</a></div>
     
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse position-end" id="navbarNav"  style={{justifyContent:'end'}} >
        <ul className="navbar-nav gap-10px end" >
          < div className=''  >
          <li className="nav-item px-3">
            <a className="nav-link active fw-bold text-white" aria-current="page" href="/">{Home}</a>
          </li> </div>
          <li className="nav-item px-3">
            <a className="nav-link fw-bold text-white" href="/Activities">{Activities}</a>
          </li>
          <li className="nav-item px-3">
            
            <a className="nav-link fw-bold text-white" href="/AboutUs">{AboutUs}</a>
          </li>
         <li className='nav-item px-3'  >
         <a className="nav-link fw-bold text-white"  href='/ContactUs'>{ContactUs} </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar


