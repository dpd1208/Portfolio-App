import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, NameSection, Name } from './Slide.styled';
import Animation from '../Animation/Animation';
import Flower from '../Flower/Flower'

const Slide = ({ testId, className }) => {
  const isMobile = window.innerWidth <= 768;

	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-slide`}
		>
			<NameSection>
				<Name>Daniel<br />Duffy</Name>
			</NameSection>
      {isMobile ? <Animation /> : <Flower />}
		</SectionWrapper>
	);
};

Slide.propTypes = {
	/**
	 * Id used for testing
	 */
	testId: PropTypes.string,
	/**
	 * Class name
	 */
	className: PropTypes.string,
};

Slide.defaultProps = {
	testId: null,
	className: null,
};

export default Slide;
