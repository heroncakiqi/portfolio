import React from 'react'
import styled from 'styled-components';
import Projects from './Projects';
import Contact from './Contact';

const ContentStyles = styled.section`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

function Content() {
  return (
    <ContentStyles>
      <Projects />
      <Contact />
    </ContentStyles>
  )
}

export default Content;