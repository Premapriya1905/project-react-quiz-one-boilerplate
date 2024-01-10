import React from 'react'

function Quiz() {
  return (
    <div className='container'>
        <div>
            <p id='title'>Question</p>
            <p>1 of 15 </p>
            <p id='question'>Which is the only mammal that can jump ?</p>
            <div id='optionbar'>
                <div className='option1'>
                <div className='options'>
                <p>Dog</p>
                </div>
                <div className='options'>
                <p>Elephant</p>
                </div>
                </div>
                <div className='option1'> 
                <div className='options'>
                <p>Goat</p>
                </div>
                <div className='options'>
                <p>Lion</p>
                </div>
                </div>
                </div>
            <div className='buttons'>
              <button id='button1'>Previous</button>
              <button id='button2'>Next</button>
              <button id='button3'>Quit</button>
            </div>
        </div>
    </div>
  )
}

export default Quiz