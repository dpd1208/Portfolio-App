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
  background-color: ${props => props.theme.colors.ui.bodyBackground};
  align-content: space-evenly;
  fonst-size: 16px;
  padding: 12px;
  justify-content: space-around;

  .skill-focused {
    font-size: 36px;
}
  `;

const AboutSection = styled.div `
  font-size: 30px;
  color: ${props => props.theme.colors.text.default};
  font-family: ${props => props.theme.fonts.mainFont};
  align-self: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 36%;
    font-size: 48px;
  }
  `;

const About = styled.div `
  position: relative;
  text-align: center;
  opacity: 0;
  width: 100%;
  animation: ${fadeInAnimation} ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.activeIndex === 1 ? '0s' : '5s'};

  @media (min-width: 768px) {
    text-align: left;
  }
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
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '6s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#41b3a3' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
    line-height: 60px;
  }
  .info-block-2 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '6.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#e8ec77' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
    line-height: 60px;
  }
  .info-block-3 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '7s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#e8a87c' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
    line-height: 60px;
  }
  .info-block-4 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '7.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#c38d9e' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
    line-height: 60px;
  }
  .info-block-5 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '8s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#ff5e5b' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
    line-height: 60px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;

  :hover {
    filter: brightness(1.1);
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