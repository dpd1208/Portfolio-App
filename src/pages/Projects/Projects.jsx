import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  SectionWrapper,
  ProjectsHeader,
  ProjectsTitle,
	Link,
  InfoBlockWrapper,
  InfoBlock,
   } from './Projects.styled';

const Projects = ({ testId, className, projectNames, activeIndex }) => {
  
const linkStyle = {
	textDecoration: 'none',
	color: 'black',
	fontSize: '18px',
	fontWeight: '600',
};

	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-about`}
		>
			<ProjectsHeader>
        <ProjectsTitle>My Projects</ProjectsTitle>
      </ProjectsHeader>
        <InfoBlockWrapper activeIndex={activeIndex}>
        {projectNames.map(item => 
					<Link>
						<NavLink style={linkStyle} to={item.path}>
            <InfoBlock className={`info-block-${item.id}`}>{item.name}</InfoBlock>
						</NavLink>
					</Link>)}
      </InfoBlockWrapper>
		</SectionWrapper>
	);
};

export default Projects;
