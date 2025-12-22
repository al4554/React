import React from 'react'

const Navbar = () => {
  return (
     <nav className='p-5 w-[70vw] flex justify-between items-center '>
        <div className='font-bold'>Foodies</div>
        <div className='flex gap-6'>
            <h3>About us</h3>
            <h3>Contact</h3>
            <h3>Branches</h3>
        </div>
     </nav>
  )
}

export default Navbar