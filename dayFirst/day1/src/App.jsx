import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './comps/Counter'
import UpdatingArrays from './comps/UpdatingArrays'
import UpdateObj from './comps/updateObj'
import UpdatingArrayOfObjects from './comps/UpdatingArrayOfObjects'
import First from './comps/sharing state/First'
import MainFirst from './comps/passing Functions/MainFirst'

function App() {

  return (
    <div>
       {/* <Counter /> */}
       {/* <UpdatingArrays /> */}
       {/* <UpdateObj /> */}
       {/* <UpdatingArrayOfObjects /> */}
       {/* <First /> */}
       <MainFirst />
    </div>
  )
}

export default App
