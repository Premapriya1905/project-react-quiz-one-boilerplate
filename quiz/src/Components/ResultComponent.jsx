import React from 'react'

function Result() {
  return (
    <div className='head'>
            <h2 id='result'>Result</h2>
            <div className='div'>
                <p id='comment'>You need more practice!</p>
                <h1 id='score'>Your score is 20%</h1>
                <div className='marks'>
                  <p className='statements'>Total number of questions </p>
                  <p className='statements'>Number of attempted questions </p>
                  <p className='statements'>Number of correct answer</p>
                  <p className='statements'>Number of wrong answers </p>
                </div>
                <div>
                  <div className='scores'>
                      <p>15</p>
                      <p>9</p>
                      <p>3</p>
                      <p>6</p>
                  <div>
                    <button id='playAgainButton'>Play again</button>
                    <button className='btn'>Back to home</button>
                  </div>
                  </div>
                  </div>
                  
            </div>
    </div>
    

  )
}

export default Result