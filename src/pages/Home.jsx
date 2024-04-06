import React from 'react'
import {Trans, useTranslation} from "react-i18next";
const Home = () => {
  const {t} = useTranslation();
  const {line1, line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17} = t("description");
const Text = [line1, line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17]

  // const Text =[
  //   {line1},{line2} ,{line3},{line4},{line5},{line6},{line7},{line8},{line9},{line10},{line11},{line12},{line13},{line14},{line15},{line16},{line17}]
  return (
   <div className=" text-center fs-5   fw-bold pt-5 pb-5">
 
 {
  Text.map((Text)=>(
    <div className='p-1'>
    <span key={Text}>{Text}</span>
    <br/>
    </div>
  ))
  }
    <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  </div>
    {/* <h1>{t("greeting")}</h1>
    <span>{line1}</span>
    <br />
    <span>{line2}</span><br/>
    <span>{line3}</span><br/>
    <span>{line4}</span><br/>
    <span>{line5}</span><br/>
    <span>{line6}</span><br/>
    <span>{line7}</span><br/>
    <span>{line8}</span><br/>
    <span>{line9}</span><br/>
    <span>{line10}</span><br/>
    <span>{line11}</span><br/>
    <span>{line12}</span><br/>
    <span>{line13}</span><br/>
    <span>{line14}</span><br/>
    <span>{line15}</span><br/>
    <span>{line16}</span><br/>
    <span>{line17}</span><br/> */}

   </div>
  )
}

export default Home

{/* <div>
<p className='text-center space-1px mt-4'>தாகம் கொண்டவன் எப்படி தண்ணீரை தேடுகின்றனரோ அதுபோல் <br /> தண்ணீரும் தாகம் கொண்டவரை தேடிக்கொண்டிருக்கிறது. <br />

ஒவ்வொரு மனிதரும் பிறருக்கு உதவும் <br /> வகையில் அவரது உயிர், வடிவம்,மனம் <br /> இருப்பது போல்  இயற்கைக்கு இயற்கையின் <br />நீதியில் இயங்கும்     இயக்கவிதியில் பல <br />உயிர்களுக்கு (Wasse) பல்வேறு உதவியும் தேவைப்படுகிறது. <br />
பிற உயிர்களுக்கு உதவவேண்டும் என்பதும் உதவாமல் <br /> தவிர்க்கப்படக் கூடாது என்பதும் எழுதாமல் எழுதப்பட்ட இயற்கை <br /> உண்மை விதி உயிர்களைக் காக்கும் உன்னதம் <br /> பிற உயிர்களுக்கு உதவுவதே! <br />
எண்ணிலடங்கா உதவிகள் தேவைப்படும் போதும் நம்மால் <br /> இவ்வுலகில், இப்பிறப்பால் என்ன வித <br /> உதவிகளில் கலந்துகொள்ள பங்கெடுக்க இயலுமோ அதில் <br /> பங்கெடுக்க பணிசெய்ய மிகச்சிறந்த சேவை <br />எண்ணத்துடன் தங்களை இனிதே வரவேற்கிறது  
<br />
"வாசி அறக்கட்டளை"</p>
</div> */}