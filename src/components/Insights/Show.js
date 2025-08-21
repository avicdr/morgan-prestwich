import React from 'react'

function Show({path, heading, img}) {
  return (
    <div className='d-flex form-bg p-5 align-items-center resp-mx-1 resp-my-1 flex-direction-column' style={{margin: "4rem"}}>
        <div className='left'>
            <div className='small'>{path}</div>
            <h3 className='heading-black m-0' style={{fontFamily: 'Poppins', textAlign: "initial"}}>{heading}</h3>
        </div>
        <div className='right d-flex justify-content-end resp-my-1 justify-content-center'>
            <img src={img} style={{filter: "invert(0.17)"}}/>
        </div>
    </div>
  )
}

export default Show