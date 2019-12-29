import React, {useEffect, useState} from 'react'
import useWriting from './useWriting';

function Header() {
  const text = `heron cakiqi \n full stack developer`
  const [state] = useWriting(text);

  return (
        <header className="App-header">
          <h1>{state}<span id="blinker">_</span></h1>
        </header>
  )
}

export default Header