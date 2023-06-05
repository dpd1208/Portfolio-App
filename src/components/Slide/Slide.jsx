import React, { useEffect } from 'react';
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
        <Name>Daniel{isMobile && <br />}Duffy</Name>
			</NameSection>
      {isMobile ? <Animation /> : <Flower />}
		</SectionWrapper>
	);
};

export default Slide;
