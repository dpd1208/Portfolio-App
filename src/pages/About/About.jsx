import React from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import {
  SectionWrapper,
  AboutHeader,
  AboutBody,
  PhotoWrapper,
  ProfilePhoto,
  ButtonContainer,
  StyledButton
} from './About.styled';
import profilePic from '../../assets/profile_photo_2.jpg';

const About = ({ testId, className, themeName }) => {
  const isMobile = window.innerWidth <= 768;
	return (
    <ThemeProvider theme={themeName}>
      <SectionWrapper
        className={className}
        data-test-id={testId && `${testId}-about`}
      >
        <AboutHeader>Check me out!</AboutHeader>
        <AboutBody>
          <PhotoWrapper><ProfilePhoto src={profilePic} /></PhotoWrapper>
        </AboutBody>
          <ButtonContainer>
          <StyledButton href='https://dpd1208.github.io/portfolio/resume.pdf' download='resume.pdf' target='_blank' style={{ color: themeName === 'coral' ? 'black' : 'white' }}>
          <i
            style={{ marginRight: '24px' }}
            class="fa fa-download"
          />{isMobile ? 'CV' : 'Resume'}</StyledButton>
                <StyledButton href='https://www.github.com/dpd1208/portfolio' target='_blank' style={{ color: themeName === 'coral' ? 'black' : 'white' }}>
          <i
            style={{ marginRight: '24px' }}
            class="fa-brands fa-github"
            />{isMobile ? 'Git' : 'Github'}</StyledButton>
          </ButtonContainer>
      </SectionWrapper>
    </ThemeProvider>
	);
};

export default About;
