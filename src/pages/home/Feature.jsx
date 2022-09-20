import React from 'react'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
export default function Feature() {
  return (
  <>
  <div className=' container py-36'>
    <div className=' w-10/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   gap-6 mx-auto justify-center'>
       {/* single feature */}

      <div className=' border border-blue rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
    <img className=' h-12 w-12  object-contain' src={logo1} alt="" />
      <div>
       <h4 className=' font-medium capitalize     text-xl  text-blue'>Free Shopping</h4>
       <p className='text-gray'>oder over $200</p>
      </div>
      </div>
      <div className=' border border-blue rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
    <img className=' h-12 w-12  object-contain' src={logo2} alt="" />
      <div>
       <h4 className=' font-medium capitalize     text-xl  text-blue'>Money Returns</h4>
       <p className='text-gray'>oder over $200</p>
      </div>
      </div>
      <div className=' border border-blue rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
    <img className=' h-12 w-12  object-contain' src={logo3} alt="" />
      <div>
       <h4 className=' font-medium capitalize     text-xl  text-blue'>OnTime delivery</h4>
       <p className='text-gray'>oder over $200</p>
      </div>
      </div>
    </div>
  </div>
  </>
  )
}
