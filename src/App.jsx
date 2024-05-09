import { useState } from 'react'
import './App.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {

  const [input, setInput] = useState('');

  const click = (e) => {
    setInput(input.concat(e.target.name));

  }
  const deleteLastDigit = () => {
    setInput(prevInput => prevInput.slice(0, -1));
  };




  const limpiar = () => {
    setInput('');
  }
  const calcular = () => {

    try {

      setInput(eval(input).toString());

    } catch (error) {

      setInput('ERROR');
    }
  }

  return (<>

    <div className='gral'>
      <div className='inputDatos'>
        <input
          type='text'
          value={input}
          style={{
            backgroundColor: 'black', margin: '40px',
            height: '60px', width: '400px', color: 'white', padding: '20px',
            textAlign: 'right', fontSize: '30px', boxShadow: '10px 10px 5px grey'
          }}
        />
      </div>
      <div className='botones'>
        <button onClick={limpiar} id='limpiar' className='limpiar'>
          C
        </button>
        <button className='tecla' onClick={click} name='/'>/</button>
        <button className='tecla' onClick={deleteLastDigit} name='='>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div className='botones'>
        <button className='tecla' onClick={click} name='7'>7</button>
        <button className='tecla' onClick={click} name='8'>8</button>
        <button className='tecla' onClick={click} name='9'>9</button>
        <button className='tecla' onClick={click} name='*'>*</button>
      </div>
      <div className='botones'>
        <button className='tecla' onClick={click} name='4'>4</button>
        <button className='tecla' onClick={click} name='5'>5</button>
        <button className='tecla' onClick={click} name='6'>6</button>
        <button className='tecla' onClick={click} name='-'>-</button>
      </div>
      <div className='botones'>
        <button className='tecla' onClick={click} name='1'>1</button>
        <button className='tecla' onClick={click} name='2'>2</button>
        <button className='tecla' onClick={click} name='3'>3</button>
        <button className='tecla' onClick={click} name='+'>+</button>
      </div>
      <div className='botones'>
        <button className='tecla0' onClick={click} name='0'>0</button>
        <button className='tecla' onClick={click} name='.'>.</button>
        <button className='tecla' onClick={calcular} id='input'>=</button>
      </div>
    </div>
  </>
  )
}
export default App;
