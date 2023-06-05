import React, { Component } from 'react';
import { SectionWrapper, AboutHeader, AboutBody, PhotoWrapper, ProfilePhoto } from './About.styled';
import profilePic from '../../assets/profile_photo_2.jpg';

const About = ({ testId, className }) => {
	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-about`}
		>
			<AboutHeader>A bit about me</AboutHeader>
			<AboutBody>
				<PhotoWrapper><ProfilePhoto src={profilePic} /></PhotoWrapper>
			</AboutBody>
		</SectionWrapper>
	);
};

export default About;
