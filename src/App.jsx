import React from 'react'
import Navbar from './comps1/Navbar'
import FilterMeals from './comps1/FilterMeals'
import Menu from './comps1/Menu'
import Articles from './comps1/Articles'
import Cards from './comps1/Cards'

const App = () => {
  return (
    <div >
      <div className='flex justify-between'>
        <Navbar />
        <FilterMeals />
      </div>
       <div className='flex justify-around'>
        <Menu />
        <Cards />
       <Articles />
       </div>
    </div>
  )
}

export default App