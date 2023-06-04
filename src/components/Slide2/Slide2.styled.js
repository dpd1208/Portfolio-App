import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 84vh;
  overflow: hidden;
  background: radial-gradient(circle farthest-side, rgb(205, 33, 42), rgb(236, 95, 5));
  background-repeat: no-repeat;
  align-content: space-evenly;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
}
  `;

  const AboutSection = styled.div `
  font-size: 42px;
  color: white;
  font-family: 'Permanent Marker', cursive;
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