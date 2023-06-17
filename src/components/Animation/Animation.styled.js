import styled, {
  keyframes
} from 'styled-components';

const isMobile = window.innerWidth <= 768;

const fall = keyframes `
0% {
    top: -550px;
    height: 600px;
    }
50% {
  top: 550px;
  height: 600px;
}
100% {
    top: 550px;
    height: 0px;
}
`;

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

const Line = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  width: 6px;
  top: -600px;
  left: 50vw;
  background-color: black;
  height: 600px;
  animation: ${fall} 2s ease;
  animation-delay: 2s;
;`

const WelcomeMessage = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  top: 50vh;
  left: 0;
  color: ${props => props.theme.colors.text.default};
  font-size: 42px;
  font-weight: 800;
  width: 100%;
  height: auto;
  transform: scale(0);
  animation: ${grow} 2s ease;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
;`


export {
  SectionWrapper,
  Line,
  WelcomeMessage,
};