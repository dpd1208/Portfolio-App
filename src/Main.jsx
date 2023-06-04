import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle, SectionWrapper } from "./Main.styled";
import NavBar from "./NavBar/NavBar";
import SkillsRibbon from "./SkillsRibbon/SkillsRibbon";

const Main = ({ testId, className, skills }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SectionWrapper>
        <NavBar testId={testId} className={className} skills={skills}/>
      </SectionWrapper>
    </React.Fragment>
  );
};

Main.propTypes = {
  /**
   * Id used for testing
   */
  testId: PropTypes.string,
  /**
   * Class name
   */
  className: PropTypes.string,
    /**
   * List of skills
   */
  skills: PropTypes.shape([]),
};

Main.defaultProps = {
  testId: "portfolio",
  className: "portfolio",
  skills: ["html", "css", "javascript", "react.js", "agile", "node.js", "styled-components", "adobe experience manager", "scrum", "adobe analytics"],
};

export default Main;
