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
      description: 'Life',
      modalContent: 'As a kid growing up in Dallas, I spent my time improving as a competitive tennis player, becoming an eagle scout, and navigating life as a gay person in a conservative, religious society. Having achieved the goals I set out to, I moved to Austin and got my degree in Economics at the University of Texas at Austin. I also minored in Latin and received a certificate in European Studies.',
    },
    {
      id: 2,
      description: 'Hobbies',
      modalContent: 'I’ve lived in Denver for the last seven years and immediately embraced the lifestyle upon moving. Over the summer weekends you can find me camping in the mountains with my dogs, playing in tennis and volleyball leagues, or growing vegetables on my balcony. In the winter I’m skiing, doing an escape room, or in a hot tub. I also play classical guitar, am learning Italian, and travel as much as possible.',
    },
    {
      id: 3,
      description: 'Expeditions',
      modalContent: 'My biggest accomplishment is walking the pilgrimage route, the Via Francigena, alone for 800 miles starting in southern France and ending 70 days later at the Vatican City. I’ve completed a number of other high adventures including backpacking 75 miles in New Mexico, canoeing 50 miles through the boundary water lakes, and scuba diving for a week along the Florida Keys.',
    },
    {
      id: 4,
      description: 'Previous Work',
      modalContent: 'I started working at a young age, first as a summer counselor at a country club, then as a waiter at the neighborhood pizza place. In college, I waited, bartended, and worked as an office manager. After graduating, I worked at a mortgage lending/servicing company as a customer service rep. I was designated manager quickly before becoming the company’s first product owner. In that role, I spearheaded its transition from a waterfall to an agile product development framework before becoming the development manager for the loan servicing department.',
    },
    {
      id: 5,
      description: 'Software Engineer',
      modalContent: 'After moving to Denver, I began as a product owner at a large tech company. I did well in that position but it caused me to develop a strong curiosity for how software worked. Later I enrolled in a coding bootcamp at The University of Denver and after graduating, moved positions to become a junior engineer. I have exceded expectations ever since, never backing down from a challenge nor delivering anything but a quality product.',
    },
  ]
};

export default Main;
