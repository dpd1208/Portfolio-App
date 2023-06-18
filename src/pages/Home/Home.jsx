import React, { useState, useEffect } from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SectionWrapper, StyledAliceCarouselWrapper } from './Home.styled';
import Slide from '../../components/Slide/Slide';
import Slide2 from '../../components/Slide2/Slide2';

const Home = ({ testId, className, aboutItems, themeName }) => {
	const items = [<Slide themeName={themeName} />, <Slide2 aboutItems={aboutItems} themeName={themeName} />];

	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-home`}
				themeName={themeName}
			>
				<StyledAliceCarouselWrapper>
					<AliceCarousel
						autoPlay
						autoPlayInterval={4000}
						autoPlayStrategy={'none'}
						animationDuration={2000}
						mouseTracking
						items={items}
					/>
				</StyledAliceCarouselWrapper>
			</SectionWrapper>
		</ThemeProvider>
	);
};

export default Home;
