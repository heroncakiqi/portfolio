import React, {useEffect, useState} from 'react'
import styled, { keyframes } from 'styled-components';
import useWriting from './useWriting';

const blink = keyframes`
0% {
  opacity: 0
}
49% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 1;
}
`;

const Blinker = styled.span`
  animation: ${blink} 0.5s infinite ;
  color: orange;
`;

const HeaderStyles = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  h1 {
    font-weight: 100;
    white-space: pre-wrap;
    font-family: 'Roboto Mono', monospace;
    text-align: center
  }
`;



function Header() {
  const text = `heron cakiqi \n full stack developer`
  const [state] = useWriting(text);
  return (
        <HeaderStyles>
          <h1>{state}<Blinker>_</Blinker></h1>
        </HeaderStyles>
  )
}

export default Header