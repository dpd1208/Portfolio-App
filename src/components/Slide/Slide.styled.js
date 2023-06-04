import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 87.5vh;
  width: 80%;
  overflow: hidden;
  background-color: white;
  align-content: space-evenly;
  fonst-size: 16px;

  .skill-focused {
    font-size: 36px;
}
  `;

  const SkillContainer = styled.div `
  position: relative;
  text-align: center;
  width: 100%;
  `;


export {
    SectionWrapper,
    SkillContainer,
};