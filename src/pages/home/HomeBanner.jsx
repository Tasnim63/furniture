import React from 'react'
import background from '../../images/homebanner.jpg'
export default function HomeBanner() {
  return (
   <>
   <div className=' bg-cover bg-no-repeat bg-center ' style={{ backgroundImage: `url(${background})`, height:"90vh" }}>
<div className="container">
  <h1 className=' text-6xl text-white capitalize '>Seasons Sale <br/>2022!</h1>
</div>
   </div>
   </>
  )
}
