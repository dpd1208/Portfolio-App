import styled, {
  keyframes
} from 'styled-components';

const isMobile = window.innerWidth <= 768;

const spin = keyframes `
0% {
    transform: skew(-.25rad);
    transform:rotate(360deg);
    }
33% {
    transform:rotate(360deg);
    transform: skew(.25rad);
}
66% {
    transform:rotate(360deg);
    transform: skew(-.25rad);
}
100% {
    transform:rotate(360deg);
    transform: skew(0);
}
`;
const panUpMobile = keyframes `
0% {
    transform: translate(0);
    font-size: 88px;
    }
    
  100% {
    transform: translateY(-200px);
    font-size: 42px;
    text-align: center;
    }
`;

const panUpDesktop = keyframes `
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
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  height: 300px;
  width: 300px;

  .skill-focused {
    font-size: 36px;
}
  `;


export {
  SectionWrapper,
};