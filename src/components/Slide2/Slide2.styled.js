import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 86vh;
  overflow: hidden;
  background-color: #fff5d7;
  align-content: space-evenly;
  fonst-size: 16px;
  padding-left: 124px;

  .skill-focused {
    font-size: 36px;
}
  `;

  const AboutSection = styled.div `
  font-size: 42px;
  color: black;
  font-family: 'Abril Fatface', cursive;
  `;

  const About = styled.div `
  position: relative;
  text-align: center;
  width: 100%;
  `;


export {
    SectionWrapper,
    AboutSection,
    About,
};