import React, { Component } from 'react';
import { SectionWrapper,
  AboutHeader, AboutBody,
  PhotoWrapper,
  ProfilePhoto,
  ButtonContainer,
  StyledButton } from './About.styled';
import profilePic from '../../assets/profile_photo_2.jpg';

const About = ({ testId, className }) => {
  const isMobile = window.innerWidth <= 768;
	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-about`}
		>
			<AboutHeader>Check me out!</AboutHeader>
			<AboutBody>
				<PhotoWrapper><ProfilePhoto src={profilePic} /></PhotoWrapper>
			</AboutBody>
        <ButtonContainer>
        <StyledButton href='../../assets/DanielDuffyResume.pdf' download='DanielDuffyResume'>
        <i
          class="fa fa-download"
          style={{ color: 'white', marginRight: '24px' }}
        />{isMobile ? 'CV' : 'Resume'}</StyledButton>
              <StyledButton href='https://www.github.com/dpd1208/portfolio'>
        <i
          class="fa fa-github"
          style={{ color: 'white', marginRight: '24px' }}
          />{isMobile ? 'Git' : 'Github'}</StyledButton>
        </ButtonContainer>
		</SectionWrapper>
	);
};

export default About;
