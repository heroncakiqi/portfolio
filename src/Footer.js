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
          <FaGithub />
          <AiOutlineMail />
          <FaCodepen />
          <AiOutlineProfile />
        </div>
      </FooterStyles>
  )
}

export default Footer