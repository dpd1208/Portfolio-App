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
  background-color: ${props => props.theme.colors.ui.bodyBackground};
  align-items: center;
  justify-content: center;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
  }


  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

const ProjectsHeader = styled.div `
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

const ProjectsTitle = styled.div `
  position: relative;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Link = styled.a `
  position: relative;
  display: flex;
  color: ${props => props.theme.colors.text.default};
  float: left;
  align-items: center;
  margin-left: 24px;
  margin-right: 12px;
`;

const InfoBlockWrapper = styled.div `
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  text-align: left;
  justify-content: end;

  
  .info-block-1 {
    animation: ${slidein} 0.5s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '0.1'};
    animation-duration: ${props => props.activeIndex === 1 ? '0s' : '0.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#41b3a3' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
  }
  .info-block-2 {
    animation: ${slidein};
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '0.6s'};
    animation-duration: ${props => props.activeIndex === 1 ? '0s' : '0.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#e8ec77' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
  }
  .info-block-3 {
    animation: ${slidein} 0.5s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '1.1s'};
    animation-duration: ${props => props.activeIndex === 1 ? '0s' : '0.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#e8a87c' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
  }
  .info-block-4 {
    animation: ${slidein} 0.5s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '1.6'};
    animation-duration: ${props => props.activeIndex === 1 ? '0s' : '0.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#c38d9e' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
  }
  .info-block-5 {
    animation: ${slidein} 0.5s;
    animation-iteration-count: ;
    animation-delay: ${props => props.activeIndex === 1 ? '0s' : '2.1'};
    animation-duration: ${props => props.activeIndex === 1 ? '0s' : '0.5s'};
    animation-fill-mode: forwards;
    background-color: ${props => props.theme.name === 'coral' ? '#ff5e5b' : 'black'};
    border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
    color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
  }
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
  ProjectsHeader,
  ProjectsTitle,
	Link,
  InfoBlockWrapper,
  InfoBlock,
};