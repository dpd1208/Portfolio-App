import styled, { keyframes } from 'styled-components';

const slidein = keyframes`
  from {
    transform: translateX(3000px);
  }
  to {
    transform: translateX(0%);
  }
`;

const fadeInAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 80vh;
  overflow: hidden;
  background-color: #fff5d7;
  align-content: space-evenly;
  fonst-size: 16px;
  padding: 24px;
  justify-content: space-around;

  .skill-focused {
    font-size: 36px;
}
  `;

const AboutSection = styled.div `
  font-size: 42px;
  color: black;
  font-family: 'Abril Fatface', cursive;
  align-self: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 33%;
  }
  `;

const About = styled.div `
  position: relative;
  text-align: center;
  opacity: 0;
  width: 100%;
  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 10s;
  `;

const InfoBlockWrapper = styled.div `
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  text-align: left;
  justify-content: end;

  
  .info-block-1 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 12s;
    animation-fill-mode: forwards;
    background-color: #ff5e5b;
  }
  .info-block-2 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 13s;
    animation-fill-mode: forwards;
    background-color: #d8d8d8;
  }
  .info-block-3 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 14s;
    animation-fill-mode: forwards;
    background-color: #ffffea;
  }
  .info-block-4 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 15s;
    animation-fill-mode: forwards;
    background-color: #00cecb;
  }
  .info-block-5 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 16s;
    animation-fill-mode: forwards;
    background-color: #ffed66;
  }
  `;

  const ModalButton = styled.button `
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  `;

const InfoBlock = styled.div `
  margin-bottom: 12px;
  transform: translateX(3000px);
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;

  :hover {
    filter: brightness(1.25);
  }

  @media (min-width: 768px) {
    width: 400px;
    padding-left: 12px;
  }
  `;


export {
  SectionWrapper,
  AboutSection,
  About,
  ModalButton,
  InfoBlockWrapper,
  InfoBlock,
};