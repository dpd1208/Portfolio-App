import React from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import {
	SectionWrapper,
} from './Project2.styled';

const Project2 = ({ testId, className, themeName }) => {
	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-about`}
			>Page Under Construction</SectionWrapper>
		</ThemeProvider>
	);
};

export default Project2;
