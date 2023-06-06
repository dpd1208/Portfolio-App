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
      description: 'University of Texas',
      modalContent: 'I graduated from UT Austin in 2012 with a BA in Economics, with a minor in Latin and a certificate in European Studies. Member, Lambda Chi Alpha.',
    },
    {
      id: 2,
      description: 'Pilgramage',
      modalContent: 'After graduating I walked The Via Francigena, an ancient pilgrimage route from Canterbury, England to Rome. I began my journey in Besancon, France and finished the 800 miles to Rome on my birthday two months later.',
    },
    {
      id: 3,
      description: 'Product owner',
      modalContent: 'My first real job was in customer service at a mortgage company. I moved up quickly, becoming the first product owner at the company. After, I worked in the same role at a telecommunications company.',
    },
    {
      id: 4,
      description: 'Coding bootcamp',
      modalContent: 'Wanting to learn more about software development after years of working closely with developers, I took a full-stack, MERN, coding bootcamp at the University of Denver. The program was a six month and intensive.',
    },
    {
      id: 5,
      description: 'Software engineer',
      modalContent: 'Upon completion of the coding bootcamp, I transitioned into a software engineer role at my current company. I have learned a ton from my coworkers and firends, as well as from working in a large scale engineering environment.',
    },
  ]
};

export default Main;
