import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { HomeIcon } from './assets/Icon';

function App() {

  const passRef = useRef(null);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePass = useCallback(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      string += '0123456789';
    }
    if (charAllowed) {
      string += '`!@_#$%^&*(){}[];~?|/'
    }

    for (let i = 1; i <= length; i++) {
      let char = string[Math.floor(Math.random() * string.length)]
      pass += char
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, setPassword, length])


  useEffect(() => {
    generatePass()
  }, [generatePass, numberAllowed, charAllowed, setPassword, length])

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current.select()
  }

  return (
    <>
      <div className='w-full h-screen bg-black/90 flex justify-center p-5'>
        <div className='h-1/2 w-1/2 bg-black/95 text-center rounded-lg'>
          <h1 className='p-4 font-semibold text-2xl text-orange-600'>
            Password generator
          </h1>
          <div className='flex overflow-hidden rounded-lg m-3 font-semibold'>
            <input
              type="text"
              className='outline-none w-full py-1 px-3'
              value={password}
              readOnly
              ref={passRef}
            />
            <button
              className='outline-none py-1 px-3 bg-cyan-600 text-white '
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <div className='flex justify-evenly items-center'>
            <div>
              <input
                id='length'
                type="range"
                max={100}
                min={8}
                value={length}
                minLength={8}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length" className='text-orange-600 pl-1'>Length ({length})</label>
            </div>
            <div>
              <input
                id='num'
                type="checkbox"
                value={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="num" className='text-orange-600 pl-1'>Number</label>
            </div>
            <div>
              <input
                id='char'
                type="checkbox"
                value={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="char" className='text-orange-600 pl-1'>Character</label>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App


