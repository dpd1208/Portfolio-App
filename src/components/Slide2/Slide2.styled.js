import styled, { keyframes } from 'styled-components';

const slidein = keyframes`
  from {
    transform: translateX(3000px);
  }
  to {
    transform: translateX(0%);
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
  padding-left: 124px;
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
  `;

const About = styled.div `
  position: relative;
  text-align: center;
  width: 100%;
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
    background-color: #486580;
  }
  .info-block-2 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 13s;
    animation-fill-mode: forwards;
    background-color: #ff8066;
  }
  .info-block-3 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 14s;
    animation-fill-mode: forwards;
    background-color: #626e20;
  }
  .info-block-4 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 15s;
    animation-fill-mode: forwards;
    background-color: #99b6cc;
  }
  .info-block-5 {
    animation: ${slidein} 1s;
    animation-iteration-count: ;
    animation-delay: 16s;
    animation-fill-mode: forwards;
    background-color: #dec031;
  }
  `;

const InfoBlock = styled.div `
  margin-bottom: 12px;
  transform: translateX(3000px);
  width: 400px;
  height: 60px;
  line-height: 60px;
  padding-left: 12px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  `;


export {
  SectionWrapper,
  AboutSection,
  About,
  InfoBlockWrapper,
  InfoBlock,
};