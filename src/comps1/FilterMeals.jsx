import React from 'react'

const FilterMeals = () => {
  return (
    <div className='flex flex-col gap-2 p-5'> 
    <label htmlFor="foodFilter" className='text-sm font-medium text-gray-700 text-center'>Food Filter</label>

    <input className='bg-amber-500 rounded-md px-3 py-2 outline-none 
     focus:border-amber-500
      focus:ring-2
     focus:ring-amber-400 
       transition' type="text" placeholder='search food...' name='foodfilter' />
         
    </div>
  )
}

export default FilterMeals