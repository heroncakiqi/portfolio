import React from 'react'
import styled from 'styled-components';

const ProjectsStyles = styled.div`
  h2 {
    margin-bottom: 30px;
    font-size: 1.7rem;
  }
  .projects-list {
    display: flex;
    flex-direction: column;
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
    .app {
      .tag {
        padding: 5px 10px;
        margin-left: 6px;
        border-radius: 8px;
        font-size: 0.7rem
      }
      .react {
        background-color: #61DAFB;
      }
      .express {
        background-color: #87C643;
      }
      .firebase {
        background-color: #FFCB2B;
      }
      .redux {
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
    }
  }
`;

function Projects() {
  return (
    <ProjectsStyles>
      <h2>Latest Projects</h2>
      <div className="projects-list">
        <div className="app">
        <header>
          <h3> <a href="https://heroncakiqi.com">heroncakiqi.com </a></h3>
          <span className="tag react">React</span>
        </header>
          <p>My personal portofolio website built with React.</p>
        </div>
        <div className="app">
          <header>
            <h3> 
              <a href="https://github.com/heroncakiqi/voating-app" target="_blank">Voating app</a>
            </h3>
            <span className="tag react">React</span>
            <span className="tag redux">Redux</span>
            <span className="tag express">express.js</span>
          </header>
         <p>An voating app built with React on the frontend and with express and mongoDb on the backend.</p>
        </div>
        <div className="app">
          <header>
            <h3>
             <a href="https://github.com/heroncakiqi/chat-app" target="_blank">Chat app </a>
            </h3>
            <span className="tag react">React</span>
            <span className="tag firebase">firebase</span>
          </header>
          <p>An live chat app built with React and firestore.</p>
        </div>
        <div className="app">
          <header>
            <h3>
              <a href="https://github.com/heroncakiqi/tello-clone" target="_blank">Tello clone</a>
            </h3>
            <span className="tag react">React</span>
            <span className="tag redux">Redux</span>
          </header>
          <p>tello</p>
        </div>
        <div className="app">
        <header>
          <h3>
            <a href="https://codepen.io/heroncakiqi/pen/jmRKbP" target="_blank">Simon game</a>
          </h3>
          <span className="tag jQuery">jQuery</span>
        </header>
        <p>Simon game.</p>
        </div>
      </div>
    </ProjectsStyles>
  )
}

export default Projects