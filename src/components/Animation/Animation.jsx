import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper } from './Animation.styled';

const Animation = ({ testId, className }) => {
	useEffect(() => {}, []);

	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-slide`}
		></SectionWrapper>
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
