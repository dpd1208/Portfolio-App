import styled, {
    keyframes
  } from 'styled-components';
  
  const isMobile = window.innerWidth <= 768;
  
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
    color: black;
    font-size: 72px;
    font-weight: 800;
    width: 100%;
    height: auto;
    transform: scale(0);
    animation: ${grow} 3s ease;
    animation-delay: 6s;
    animation-fill-mode: forwards;
  ;`
  
  
  export {
    SectionWrapper,
    WelcomeMessage,
  };