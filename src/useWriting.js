import React, {useEffect, useState} from 'react'

function useWriting(text) {
  const [state, setState] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const letterToAdd = state.length
      setState(`${state + text[letterToAdd]}`);
    }, 50);
    if(state.length === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [state, text]);
  return [state]
}

export default useWriting