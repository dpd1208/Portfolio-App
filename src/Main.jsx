import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, SectionWrapper } from './Main.styled';
import NavBar from './NavBar/NavBar';
import SkillsRibbon from './SkillsRibbon/SkillsRibbon';

const Main = ({ testId, className, skills, aboutItems }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<SectionWrapper>
				<NavBar testId={testId} className={className} skills={skills} aboutItems={aboutItems} />
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
    'Full stack software engineer',
    'Background in product ownership',
    'My two dogs are the cutest',
    'You\'ll find me in the mountains',
    'Guitar, tennis, and woodworking',
  ],
};

export default Main;
