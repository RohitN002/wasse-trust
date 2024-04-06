import React from 'react'

const Footer = () => {
  return (
    // <!-- Remove the container if you want to extend the Footer to full width. -->
<div className=" pt-5 mt-5">

  <footer className="text-center text-lg-start">
    <div className="container d-flex justify-content-center py-5" >
      
    </div>

    {/* <!-- Copyright --> */}
    <div className="text-center text-white p-5 " style={{backgroundColor:"#0F56A4"}} >
      © 2024 Copyright:
      <a className="text-white" href="https://www.wassitrust.org">WASSETRUST.ORG</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
</div>

    
  
  )
}

export default Footer