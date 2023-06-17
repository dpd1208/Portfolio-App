import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '../../ThemeProvider/provider';
import { SectionWrapper, Line, WelcomeMessage } from './Animation.styled';

const Animation = ({ testId, className, themeName }) => {

	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-mobile-animation`}
			></SectionWrapper><Line /><WelcomeMessage>Welcome!</WelcomeMessage>
		</ThemeProvider>
	);
};

Animation.propTypes = {
	/**
	 * Id used for testing
	 */
	testId: PropTypes.string,
	/**
	 * Class name
	 */
	className: PropTypes.string,
};

Animation.defaultProps = {
	testId: null,
	className: null,
};

export default Animation;
