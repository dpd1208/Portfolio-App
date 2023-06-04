import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SectionWrapper, NameSection, Name } from "./Slide.styled";

const Slide = ({ testId, className }) => {

useEffect(() => {

  }, []);

  return (
    <SectionWrapper
      className={className}
      data-test-id={testId && `${testId}-slide`}
    >
    <NameSection>
      <Name>Daniel Duffy</Name>
    </NameSection>
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
  className: PropTypes.string
};

Slide.defaultProps = {
  testId: null,
  className: null
};

export default Slide;
