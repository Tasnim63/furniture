import React from 'react'
import background from '../../images/homebanner.jpg'
export default function HomeBanner() {
  return (
   <>
   <div className=' bg-cover bg-no-repeat bg-center  py-36' style={{ backgroundImage: `url(${background})` }}>
<div className="container">
  <h1 className=' text-6xl text-blue capitalize '>Seasons Sale <br/><span className=' text-red '>2022!</span></h1>
  <p className=' text-white my-4'>Natural Log Dining Table Chair : Pellentesque habitant morbi tristique<br/> senectus et netus et malesuada fames ac turpis egestas. Vestib</p>
  <div className=' mt-12'>
<a className=' bg-white text-blue border border-blue px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-red hover:border-red' href="#">Shop Now</a>
  </div>
</div>
   </div>
   </>
  )
}
