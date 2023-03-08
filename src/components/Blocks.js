import React from 'react'

const Blocks = (props) => {

  return (
    <>
    <div className="Blocks" onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
    </>
  )
}

export default Blocks