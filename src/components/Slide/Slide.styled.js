import styled, { keyframes } from 'styled-components';

const isMobile = window.innerWidth <= 768;
console.log('lii ', isMobile);
const fadeInAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const panUpMobile = keyframes`
0% {
    transform: translate(0);
    font-size: 88px;

    }
    
  100% {
    transform: translateY(-200px);
    font-size: 42px;
    text-align: center;
    }
`;

const panUpDesktop = keyframes`
0% {
    transform: translate(0);
    font-size:120px;

    }
    
  100% {
    transform: translateY(-300px);
    font-size: 60px;
    transformX: 0;
    }
`;

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

  const NameSection = styled.div `
  font-size: 88px;
  color: black;
  font-family: 'Abril Fatface', cursive;
  jestify-content: center;
  text-align: center;
  animation: ${fadeInAnimation} ease 3s, 3s ${isMobile ? panUpMobile : panUpDesktop} ease  3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  width: 100%;

  @media (min-width: 768px) {
    jestify-content: left;
    text-align: start;
    font-size: 120px;
    margin-left: 6%;
  }
  `;

  const Name = styled.div `
  position: relative;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    jestify-content: left;
    text-align: start;
  }
  `;


export {
    SectionWrapper,
  NameSection,
  Name,
};