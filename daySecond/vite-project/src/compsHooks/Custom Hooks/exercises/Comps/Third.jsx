import React from 'react'
import UseToggle from '../hooks/UseToggle'

const Third = () => {
    const [isToggled,toggle]=UseToggle()

  return (
    <div> 
      <button onClick={toggle}>{isToggled?"hide" : "show"} message</button>
      {isToggled && <p>this is the message</p>}
    </div>
  )
}

export default Third