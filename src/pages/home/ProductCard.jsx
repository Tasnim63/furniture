import React from 'react'
import product1 from '../../images/product1'
export default function ProductCard() {
  return (
<>
<div className=' container'>
<h1 className='text-2xl font-medium text-gray uppercase mb-6'>Our Products</h1>
{/* product grid */}

<div className="grid grid-cols-4 gap-6">
{/* single product */}
<div className="bg-white shadow-md rounded overflow-hidden">
<div className=' relative'>
<img src={product1} alt="" />
</div>
</div>
</div>


</div>
</>
  )
}
