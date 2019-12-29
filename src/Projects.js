import React from 'react'
import styled from 'styled-components';

const ProjectsStyles = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
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
        margin-right: 8px;
      }
    }
    .app {
      background-color: ;
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
          <h3>heroncakiqi.com</h3>
          <span className="tag react">React</span>
        </header>
          <p>My personal portofolio website built with React.</p>
        </div>
        <div className="app">
          <header>
            <h3>Voating app</h3>
            <span className="tag react">React</span>
            <span className="tag redux">Redux</span>
            <span className="tag express">express.js</span>
          </header>
         <p>An voating app built with React on the frontend and with express and mongoDb on the backend.</p>
        </div>
        <div className="app">
          <header>
            <h3>Chat app</h3>
            <span className="tag react">React</span>
            <span className="tag firebase">firebase</span>
          </header>
          <p>An live chat app built with React and firestore.</p>
        </div>
        <div className="app">
          <header>
            <h3>Tello clone</h3>
            <span className="tag react">React</span>
            <span className="tag redux">Redux</span>
          </header>
          <p>tello</p>
        </div>
        <div className="app">
        <header>
          <h3>Simon game</h3>
          <span className="tag jQuery">jQuery</span>
        </header>
        <p>Simon game.</p>
        </div>
      </div>
    </ProjectsStyles>
  )
}

export default Projects