import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import {useTranslation} from "react-i18next";
const ContactUs = () => {
  const {t} = useTranslation();
  const {ContactUs,Adress} = t("ContactUs");
  return (

    <div className="container card  "  style={{maxWidth:"1100px"}}>
  <div className="row " >
    
 
        <div className='col'>

       
  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.2625540515965!2d76.9684653750454!3d11.018917089144974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzA4LjEiTiA3NsKwNTgnMTUuOCJF!5e0!3m2!1sen!2sin!4v1711488766792!5m2!1sen!2sin" width={"550px"}
height={"450px"}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
    </div>
    
    <div className="col pt-5 pb-5" style={{backgroundColor:"#0F56A4"}}>
      <div className="card-body">
        <div>
        <h5 className="card-title text-center text-white pb-3 sans-serif fw-bold ">{ContactUs} </h5>
        </div>
        
        <div className="card-text ">
          <ul>
            <li className="li"><p className="  mt-5 pl-5 text-white pb-3 ">
          <FaLocationDot className='white '/> {Adress} </p>
</li>
            <li className=" li pb-3"><p className="text-white"><IoCall color='white' className='text-4xl'/> 944-310-006</p>
</li>
            <li className="text-white li pb-3 "><MdEmail className='text-start white' /> wassetrust@gmail.com
            </li>
          </ul>
          
  </div>
       </div>
      </div>
    </div>
  </div>


    
  )
}

export default ContactUs
{/* <div className=''>
  
  <div>
  <div className=""><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.2625540515965!2d76.9684653750454!3d11.018917089144974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzA4LjEiTiA3NsKwNTgnMTUuOCJF!5e0!3m2!1sen!2sin!4v1711488766792!5m2!1sen!2sin" width="400" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe></div>
  <div className=""><p className=""> No 32-35(1) New Siddhapudur, ilango Nagar-2 , Coimbatore, Tamilnadu-641044</p></div>
  
  </div>
  
  </div> */}