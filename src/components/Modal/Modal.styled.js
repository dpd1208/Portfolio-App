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
  background-color: #EEF9FD;
  color: black;
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