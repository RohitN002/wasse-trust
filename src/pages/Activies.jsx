import React from 'react'
import act11 from "../assets/act1.jpg"
import act12 from "../assets/act1.1.jpg"
import act13 from "../assets/act1.2.jpg"
import act31 from "../assets/act3.jpg"
import act32 from "../assets/act3.2.jpg"
import act41 from "../assets/act4.jpg"
import act42 from "../assets/act4.2.jpg"
import act51 from "../assets/act5.jpg"
import act52 from "../assets/act5.2.jpg"
import act61 from "../assets/act6.jpg"
// import act62 from "../assets/act6.1.jpg"
import act71 from "../assets/act7.jpg"
import act72 from "../assets/act7.2.jpg"
import act81 from "../assets/act8.1.jpg"
import act82 from "../assets/act8.jpg"
import act91 from "../assets/act9.jpg"
import act92 from "../assets/act9.1.jpg"
import act101 from "../assets/act10.jpg"
import act102 from "../assets/act10.1.jpg"
import act111 from "../assets/act11.jpg"
import act141 from "../assets/act14.jpg"
import act131 from "../assets/act13.jpg"
import act121 from "../assets/act12.jpg"
import act122 from "../assets/act12.2.jpg"
import act22 from "../assets/act2.2.jpg"
import act21 from "../assets/act2.jpg"
// import act2 from "../assets/act1.2.jpg"
import { useTranslation} from "react-i18next";
const Activies = () => {
  const {t} = useTranslation();
  const {activity1,activity2,activity3,activity4,activity5,activity6,activity7,activity8,
    activity9,activity10,activity11,activity12,activity13,activity14} = t("activities")

   const description =[
    {
      activity :activity1,
      img1 :act11,
      img2: act12
    },
    {
      activity :activity2,
      img1 : act21,
      img2:act22
    },
    {
      activity :activity3,
      img1:act31 ,
      img2:act32
      
    },
{
  activity :activity4,
  img1:act41 ,
  img2:act42
},
{
  activity :activity5,
  img1: act51,
  img2:act52
},{
  activity :activity6,
  img1:act61 ,
  img2:act61
},
   {
    activity :activity7,
    img1: act71,
    img2 :act72
   },
    {
      activity :activity8,
      img1:act81 ,
      img2 :act82
    },
    {
      activity :activity9,
      img1:act91 ,
      img2 :act92
    },
   {
    activity :activity10,
    img1: act101,
    img2 :act102
   },
   {
    activity :activity11,
    img1 :act111,
    img2:act111
   },
    {
      activity :activity12,
      img1 :act121,
      img2:act122
    },
    {
      activity :activity13,
      img1 :act131,
      img2:act131
    },
   {
    activity :activity14,
    img1 : act141,
    img2: act141
   }
   ]
    

  
      
  return (
    <div className='container p-2  pb-5  mb-5'>
    <div className="row ">
     {
      description.map((description,activity)=>

     ( 
      <div className="card my-5 pb-5 " >
      <img src={description.img1} key={activity} class="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text ">{description.activity}</p>
      </div>
    </div>

   )) }
  
</div>
</div>

   
  )
}

export default Activies

{/* 2
<div className="col-lg-4 col-md-6 col-12 m-5 ">
<div class="card " >
 
  <img src={act1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity2}</p>
  </div>
</div>
</div>
3
<div className="col-lg-4 col-md-6 col-12 m-5">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
4
<div className="col-lg-4 col-md-6 col-12 m-5">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
5
<div className="col-lg-4 col-md-6 col-12 m-5">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
6
<div className="col-lg-4 col-md-6 col-12 m-5">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
7
<div className="col-lg-4 col-md-6 col-12 m-5">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
8
<div className="col-lg-4 col-md-2 col-12 m-5">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
9
<div className="col-lg-4 col-md-2 col-12 m-5 ">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
10
<div className="col-lg-4 col-md-6 col-12 m-5 ">
<div className=" card ">
  <img src={act1} style={{maxWidth:"50rem"}} alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
11
<div className="col-lg-4 col-md-6 col-12 m-5 ">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
12
<div className="col-lg-4 col-md-6 col-12 m-5 ">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
13
<div className="col-lg-4 col-md-6 col-12 m-5 ">
<div className=" card ">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>
14
<div className="col-lg-4 col-md-6 col-12 m-5 ">
<div className=" card  mb-5">
  <img src={act1}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{activity3}</p>
  </div>
</div>
</div>

  </div>
  </div> */}