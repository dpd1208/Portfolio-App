import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SectionWrapper, AboutSection, About } from "./Slide2.styled";

const Slide2 = ({ testId, className }) => {

useEffect(() => {

  }, []);

  return (
    <SectionWrapper
      className={className}
      data-test-id={testId && `${testId}-slide`}
    >
    <AboutSection>
      <About>Here's a bit about me.</About>
    </AboutSection>
    </SectionWrapper>
  );
};

Slide2.propTypes = {
  /**
   * Id used for testing
   */
  testId: PropTypes.string,
  /**
   * Class name
   */
  className: PropTypes.string
};

Slide2.defaultProps = {
  testId: null,
  className: null
};

export default Slide2;
