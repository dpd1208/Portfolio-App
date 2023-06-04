import React, { Component } from "react";
import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SectionWrapper, StyledAliceCarouselWrapper } from "./Home.styled";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Slide from "../../components/Slide/Slide";

const Home = ({ testId, className, skills }) => {
  const items = [<About />, <Contact />, <Slide skills={skills} />];

  return (
    <SectionWrapper
      className={className}
      data-test-id={testId && `${testId}-home`}
    ><StyledAliceCarouselWrapper>
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      autoPlayStrategy={"default"}
      animationDuration={1800}
      infinite
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
  className: PropTypes.string
};

Home.defaultProps = {
  testId: null,
  className: null
};

export default Home;
