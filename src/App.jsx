import React, { useState } from 'react'
import './App.css'
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  let [text,setText] = useState("")
  return (
    <div className='App-full-Screen'>
      <Background />
      <Foreground/>
    </div>
  )
}

export default App