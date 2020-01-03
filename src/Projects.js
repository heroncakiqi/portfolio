import React, {useEffect} from 'react'
import styled from 'styled-components';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firestore from './firebase';
import ProjectItem from './ProjectItem';

const ProjectsStyles = styled.div`
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
  const [value, loading, error] = useCollectionData(firestore.collection('projects'));
  return (
    <ProjectsStyles>
      <h2>Latest Projects</h2>
      <div className="projects-list">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {value && value.map(item => <ProjectItem item={item} />)}
      </div>
    </ProjectsStyles>
  )
}

export default Projects