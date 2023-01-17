import React from 'react'

function Spinner(props) {
  const chosenUser = props.chosenUser;
  return (
    <div className='loadingWindow'>
      <div className='result'>
       <div> You are making gift for:</div>
        {chosenUser.length > 0 ? 
          (
            <div className='drawingResult'>{chosenUser}</div>
          )
          : 
          (
            <div className="dots">
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          )
        }
      </div>
      <img src={require('../img/santa.png')} className="leftDownImg" alt="" />
      <img src={require('../img/reindeer.png')} className="topRightImg" alt="" />
          
    </div>
  )
}

export default Spinner
