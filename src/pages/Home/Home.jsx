import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SectionWrapper, StyledAliceCarouselWrapper } from './Home.styled';
import Slide from '../../components/Slide/Slide';
import Slide2 from '../../components/Slide2/Slide2';

const Home = ({ testId, className, aboutItems }) => {
	const items = [<Slide />, <Slide2 aboutItems={aboutItems} />];

	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-home`}
		>
			<StyledAliceCarouselWrapper>
				<AliceCarousel
					autoPlay
					autoPlayInterval={9000}
					autoPlayStrategy={'none'}
					animationDuration={3000}
					mouseTracking
					items={items}
				/>
			</StyledAliceCarouselWrapper>
		</SectionWrapper>
	);
};

Home.propTypes = {
	/**
	 * Id used for testing
	 */
	testId: PropTypes.string,
	/**
	 * Class name
	 */
	className: PropTypes.string,
};

Home.defaultProps = {
	testId: null,
	className: null,
};

export default Home;
