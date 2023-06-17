import styled, {
    keyframes
  } from 'styled-components';
  
  const grow = keyframes `
  0% {
    transform: scale(0);
      }
  100% {
    transform: scale(1);
  }
  `;
  
  const SectionWrapper = styled.div `
    position: absolute;
    display: flex;
    flex-flow: row wrap;
  
    .skill-focused {
      font-size: 36px;
  }
    `;
  
  const WelcomeMessage = styled.div `
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    top: 32vh;
    left: 0;
    color: ${props => props.theme.colors.text.default};
    font-size: 72px;
    font-weight: 800;
    font-family: ${props => props.theme.fonts.secondaryFont};
    width: 100%;
    height: auto;
    transform: scale(0);
    animation: ${grow} 2s ease;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    text-shadow: 1px 1px 2px gray, 0 0 1em rgba(20, 117, 122, 0.4), 0 0 0.2em white;
  ;`
  
  
  export {
    SectionWrapper,
    WelcomeMessage,
  };