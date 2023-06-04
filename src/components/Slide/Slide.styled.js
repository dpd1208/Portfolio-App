import styled, { keyframes } from 'styled-components';


const fadeInAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const panUp = keyframes`
0% {
    transform: translate(0);
    font-size: 120px;
    }
    
  100% {
    transform: translateY(-300px);
    font-size: 60px;
    }
`;

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 84vh;
  overflow: hidden;
  background: radial-gradient(780px at 37.8% 100.3%, rgb(19, 55, 115) 2.2%, rgb(32, 7, 80) 20.2%, rgb(27, 88, 111) 58.6%, rgb(115, 88, 44) 75%, rgb(99, 19, 90) 89.6%, rgb(12, 51, 76) 96.1%);
  align-content: space-evenly;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
}
  `;

  const NameSection = styled.div `
  font-size: 120px;
  color: white;
  font-family: 'Permanent Marker', cursive;
  animation: ${fadeInAnimation} ease 3s, 3s ${panUp} ease  3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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