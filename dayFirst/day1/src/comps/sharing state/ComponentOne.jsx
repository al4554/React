import React from 'react'

const ComponentOne = ({count,onClickHandler}) => {
  return (
    <div> 
        <strong>{count}</strong>
        <button onClick={onClickHandler}>increase</button>
    </div>
  )
}

export default ComponentOne