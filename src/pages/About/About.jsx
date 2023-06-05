import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, AboutHeader, AboutBody, PhotoWrapper, ProfilePhoto } from './About.styled';

const About = ({ testId, className }) => {
	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-about`}
		>
			<AboutHeader>A bit about me</AboutHeader>
			<AboutBody>
				<PhotoWrapper><ProfilePhoto src="../../assets/profile_photo_2.jpg"/></PhotoWrapper>
			</AboutBody>
		</SectionWrapper>
	);
};

About.propTypes = {
	/**
	 * Id used for testing
	 */
	testId: PropTypes.string,
	/**
	 * Class name
	 */
	className: PropTypes.string,
};

About.defaultProps = {
	testId: null,
	className: null,
};

export default About;
