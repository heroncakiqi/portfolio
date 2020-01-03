import React from 'react'
import styled from 'styled-components';

const ItemStyles = styled.div`
  header {
    display: flex;
    align-items: flex-start;
    h3 {
      margin: 0;
      margin-right: 0.5rem;
      a {
        text-decoration: none
      }
    }
  }
  .tag {
    padding: 5px 10px;
    margin-left: 6px;
    border-radius: 8px;
    font-size: 0.7rem
  }
  .React {
    background-color: #61DAFB;
  }
  .express {
    background-color: #87C643;
  }
  .firebase {
    background-color: #FFCB2B;
  }
  .Redux {
    background-color: #764ABC;
  }
  .jQuery {
    background-color: #0769AD;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: #807E9A;
  }
`

function ProjectItem({item}) {
  console.log(item)
  return (
    <ItemStyles>
      <header>
        <h3> <a href={item.url}>{item.name}</a></h3>
        {item.technologies.map(tech => <span className={`tag ${tech}`}>{tech}</span>)}
      </header>
      <p>{item.description}</p>
    </ItemStyles>
  )
}

export default ProjectItem