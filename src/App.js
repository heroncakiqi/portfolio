import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Content from './Content';
import { GlobalStyle } from './theme/globalStyle';

const AppStyles = styled.div`
  background-color: #141414;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyles>
          <Header />
          <Content />
      </AppStyles>
    </>
  );
}

export default App;
