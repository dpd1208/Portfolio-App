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
        <StyledButton href='https://dpd1208.github.io/portfolio/public/resume.pdf' download='resume.pdf'>
        <i
          class="fa fa-download"
          style={{ color: 'black', marginRight: '24px' }}
        />{isMobile ? 'CV' : 'Resume'}</StyledButton>
              <StyledButton href='https://www.github.com/dpd1208/portfolio' target='_blank'>
        <i
          class="fa fa-github"
          style={{ color: 'black', marginRight: '24px' }}
          />{isMobile ? 'Git' : 'Github'}</StyledButton>
        </ButtonContainer>
		</SectionWrapper>
	);
};

export default About;
