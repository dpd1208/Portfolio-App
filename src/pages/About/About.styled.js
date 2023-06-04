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
  padding: 24px;

  .skill-focused {
    font-size: 36px;
}
  `;

  const AboutHeader = styled.div `
  font-size: 60px;
  color: black;
  font-family: 'Abril Fatface', cursive;
  `;
  
  const AboutBody = styled.div `
  font-size: 30px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  `;

export {
    SectionWrapper,
    AboutHeader,
    AboutBody,
};