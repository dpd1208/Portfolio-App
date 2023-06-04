import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SectionWrapper, SkillContainer } from "./Slide.styled";

const Slide = ({ testId, className, skills }) => {
const [focus, setFocus] = useState(true);
const [focusClassName, setFocusClassName] = useState(true);
let index = 0;

//   const getClassName = (i) => {
//     console.log(index, index === i);
//     return index === i ? "skill-focused" : "skill-unfocused";
//   };

  const getElement = (skill, i) => {
    return <SkillContainer
                index={index}
                className={`skill-${i} ${focusClassName}`}
            >
            {skill}
        </SkillContainer>
  };

useEffect(() => {
    console.log('lii ', focus);
  }, [focus]);

useEffect(() => {
    // document.querySelector(".skill-0")?.classList.add("skill-focused");
    const interval = setInterval(() => {
        // console.log(document.querySelector(`.skill-${index}`))
    // document.querySelector(`.skill-${index}`)?.classList.toggle("skill-focused");
    index += 1;
    if (index >= (skills.length)) {
        index = 0;
      }
    //   console.log(index);
      setFocus(!focus);
    // document.querySelector(`.skill-${index}`)?.classList.toggle("skill-focused");
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SectionWrapper
      className={className}
      data-test-id={testId && `${testId}-slide`}
    >
    {skills.map((skill, i) => (
        <React.Fragment>{getElement(skill, i)}</React.Fragment>
    ))}
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
