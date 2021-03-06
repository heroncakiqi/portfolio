import React, { useEffect } from "react";
import styled from "styled-components";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firestore from "./firebase";
import ProjectItem from "./ProjectItem";

const ProjectsStyles = styled.div`
  margin: 0 10px;
  @media (min-width: 1024px) {
    magrgin: 0px;
  }
  h2 {
    margin-bottom: 30px;
    font-size: 1.7rem;
  }
  .projects-list {
    display: flex;
    flex-direction: column;
  }
`;

function Projects() {
  const [value, loading, error] = useCollectionData(
    firestore.collection("projects").orderBy("priority")
  );
  return (
    <ProjectsStyles>
      <h2>Latest Projects</h2>
      <div className="projects-list">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {value &&
          value.map(item => <ProjectItem key={item.name} item={item} />)}
      </div>
    </ProjectsStyles>
  );
}

export default Projects;
