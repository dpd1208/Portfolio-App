import React from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import {
  SectionWrapper,
} from './Project1.styled';

const Project1 = ({ testId, className, themeName }) => {
	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-about`}
			>Page Under Construction</SectionWrapper>
		</ThemeProvider>
	);
};

export default Project1;
