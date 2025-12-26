import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Projects/ToDo'
import MealsApiProject from './Projects/MealsApiProject'
import Calci from './Projects/calculator/calci'
import ToggleBackgroundColor from './Projects/Toggle background Color/ToggleBackgroundColor'
import HiddenSearchBar from './Projects/Search bar/HiddenSearchBar'
import Testimonials from './Projects/Testamonials/Testimonials'
import MainAccordion from './Projects/Accordions/MainAccordion'
import AppFormValidation from './Projects/FormValidation/AppFormValidation'
import IndexECommerce from './Projects/10. E-Commerce Advance Filtering/src/indexECommerce'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
         {/* <Todo/> */}
         {/* <MealsApiProject /> */}
         {/* <Calci /> */}
         {/* <ToggleBackgroundColor /> */}
         {/* <HiddenSearchBar /> */}
         {/* <Testimonials/> */}
         {/* <MainAccordion /> */}
         {/* <AppFormValidation /> */}
         <IndexECommerce/>
      </div>
      
  )
}

export default App

