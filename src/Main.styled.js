import styled, {
  createGlobalStyle,
  keyframes
} from 'styled-components';

const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0.5;
}
`;



const GlobalStyle = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
  }

  body {
    background: black;
    height: 100vh;

  }
  canvas {
    display: none;
    animation: ${fadeOut} 6s ease;
    animation-fill-mode: forwards;
    animation-delay: 3s;
  }
`;

const SectionWrapper = styled.div `
  position: relative;
  `;


export {
  GlobalStyle,
  SectionWrapper,
};