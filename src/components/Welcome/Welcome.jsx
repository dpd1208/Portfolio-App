import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, WelcomeMessage } from './Welcome.styled';

const Welcome = ({ testId, className }) => {

	return (
		<><SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-mobile-animation`}
		></SectionWrapper><WelcomeMessage>Thanks for stopping by!</WelcomeMessage></>
	);
};

Welcome.propTypes = {
	/**
	 * Id used for testing
	 */
	testId: PropTypes.string,
	/**
	 * Class name
	 */
	className: PropTypes.string,
};

Welcome.defaultProps = {
	testId: null,
	className: null,
};

export default Welcome;