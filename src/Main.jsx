import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, SectionWrapper } from './Main.styled';
import NavBar from './NavBar/NavBar';
import SkillsRibbon from './SkillsRibbon/SkillsRibbon';

const Main = ({
  testId,
  className,
  skills,
  aboutItems,
}) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<SectionWrapper>
        <NavBar
          testId={testId}
          className={className}
          skills={skills}
          aboutItems={aboutItems}
        />
			</SectionWrapper>
		</React.Fragment>
	);
};

Main.propTypes = {
	/**
	 * Id used for testing
	 */
	testId: PropTypes.string,
	/**
	 * Class name
	 */
	className: PropTypes.string,
	/**
	 * List of skills
	 */
  skills: PropTypes.shape([]),
  	/**
	 * List of skills and their modal contents
	 */
	aboutItems: PropTypes.shape([]),
};

Main.defaultProps = {
	testId: 'portfolio',
	className: 'portfolio',
	skills: [
		'html',
		'css',
		'javascript',
		'react.js',
		'agile',
		'node.js',
		'styled-components',
		'adobe experience manager',
		'scrum',
		'adobe analytics',
  ],
  aboutItems: [
    {
      id: 1,
      description: 'Full stack software engineer',
      modalContent: 'item 1',
    },
    {
      id: 2,
      description: 'Scrum product ownership',
      modalContent: 'item 2',
    },
    {
      id: 3,
      description: 'My two dogs are the cutest',
      modalContent: 'item 3',
    },
    {
      id: 4,
      description: 'You\'ll find me in the mountains',
      modalContent: 'item 4',
    },
    {
      id: 5,
      description: 'Guitar, tennis, and woodworking',
      modalContent: 'item 5',
    },
  ]
};

export default Main;
