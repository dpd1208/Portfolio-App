import React from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import { SectionWrapper, NameSection, Name } from './Slide.styled';
import Animation from '../Animation/Animation';
import Flower from '../Flower/Flower';
import Welcome from '../Welcome/Welcome';

const Slide = ({ testId, className, themeName }) => {
  const isMobile = window.innerWidth <= 768;

	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-slide`}
			>
				<NameSection>
					<Name>Daniel{isMobile && <br />} Duffy</Name>
				</NameSection>
			{isMobile && <Animation themeName={themeName} />}
			{!isMobile && themeName === 'coral' && <Flower />}
			{!isMobile && <Welcome themeName={themeName}>Welcome</Welcome>}
			</SectionWrapper>
		</ThemeProvider>
	);
};

export default Slide;
