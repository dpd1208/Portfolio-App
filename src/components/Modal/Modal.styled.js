import styled, {
  keyframes
} from 'styled-components';

const isMobile = window.innerWidth <= 768;

const panRight = keyframes `
0% {
    left: -550px;
    }
100% {
    left: 0px;
}
`;

const panDown = keyframes `
0% {
    top: -550px;
    }
100% {
    top: 0px;
}
`;
const panLeft = keyframes `
0% {
    left: 0px;
    }
100% {
    left: -550px;
}
`;

const panUp = keyframes `
0% {
    top: 0px;
    }
100% {
    top: -550px;
}
`;

const ModalWrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 764px) {
    width: 78%;
    top: 20%;
    left: -18%;
    height: 60%;
  }

  @media (min-width: 1120px) {
    width: 90%;
  }
`;

  const ModalContent = styled.div `
  position: relative;
  top: ${isMobile ? 'top: -550px;' :'top: 0;'}
  left: ${isMobile ? 'top: 0;' :'top: -550px;'}
  width: 100%;
  height: 100%;
  opacity: 1;
  display: flex;
  font-size: 18px;
  font-weight: 600px;
  background-color: ${props => props.themeName === 'coral' ? '#EEF9FD' : 'black'};
  border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
  color: ${props => props.theme.name === 'coral' ? 'black' : '#00FF41'};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  animation: ${isMobile ? panDown : panRight} ease  0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media (min-width: 764px) {
    width: 60%;
    height: 360px;
  }
    
  ::-webkit-scrollbar {
      display: none;
    }
  
  .fade-out {
    animation: ${isMobile ? panUp : panLeft} ease  0.4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

const CloseButton = styled.div `
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: transparent;
    cursor: pointer;
    width: 20px;
`;


export {
ModalWrapper,
ModalContent,
CloseButton,
};