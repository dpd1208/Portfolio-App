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
    transform: translateY(-300px);
    font-size:"42px;
    transform: transformX: -420px;
    width: 50px;
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
  animation: ${fadeInAnimation} ease 3s, 3s ${isMobile ? panUpMobile : panUpDesktop} ease  3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media (min-width: 768px) {
    font-size: 120px;
  }
  `;

  const Name = styled.div `
  position: relative;
  text-align: center;
  width: 100%;
  `;


export {
    SectionWrapper,
  NameSection,
  Name,
};