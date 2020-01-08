import React from 'react';
import styled from 'styled-components'; 
import { FaGithub, FaCodepen } from 'react-icons/fa';
import { AiOutlineProfile, AiOutlineMail } from "react-icons/ai";

const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  .icons-group {
    margin: 2rem 0;
    svg {
      margin: 1rem;
    }
  }
`;

function Footer() {
  return (
      <FooterStyles>
        <div className="icons-group">
          <a href="https://github.com/heroncakiqi" target="_blank"><FaGithub /></a>
          <a href="mailto:cakiqiheron@gmail.com" target="_blank"><AiOutlineMail /></a>
          <a href="https://codepen.io/heroncakiqi" target="_blank"><FaCodepen /></a>
          <a href="/heroncakiqi.pdf" download target="_blank"><AiOutlineProfile /></a>
        </div>
      </FooterStyles>
  )
}

export default Footer