import { useState } from 'react'
import './App.css'
import ToDo from './comps/ToDo'
import Profile from './comps/Profile'
import ShoppingList from './comps/ShoppingList'
import First from './compsHooks/UseState/first'
import Copied from './comps/Copied'
import FirstUseEffect from './compsHooks/UseState/usseEffect/FirstUseEffect'
import SecondUseEffect from './compsHooks/UseState/usseEffect/secondUseEffect'
import ContextApi from './compsHooks/ContextAPI/ContextApi'
import ExcerciseOne from './compsHooks/ContextAPI/excercise/ExcerciseOne'
import FitrstMain from './compsHooks/useReducer/FitrstMain'
import ExcerciseUsereducer from './compsHooks/useReducer/ExcerciseUsereducer'
import ExcerciseUseRef from './compsHooks/UseRef/ExcerciseUseRef'
import FirstCustomHooks from './compsHooks/Custom Hooks/FirstCustomHooks'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       {/* <ToDo /> */}
       {/* <Profile /> */}
       {/* <ShoppingList /> */}
       {/* <First /> */}
       {/* <Copied /> */}

       {/* <FirstUseEffect /> */}
       {/* <SecondUseEffect /> */}
        {/* <ContextApi />
         */}

         {/* <ExcerciseOne /> */}
         {/* <FitrstMain /> */}
         {/* <ExcerciseUsereducer /> */}
         {/* <ExcerciseUseRef /> */}
         {/* <FirstCustomHooks /> */}
    </div>
         
  )
}

export default App
