import styled from 'styled-components';

const ModalWrapper = styled.div `
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 120px;
}
  `;

  const ModalContent = styled.div `
  position: absolute;
  width: 360px;
  height: 360px;
  opacity: 1;
  display: flex;
    font-size: 18px;
    font-weight: 600px;
    background-color: white;
    color: black;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 6px;
    
    ::-webkit-scrollbar {
        display: none;
      }
`;

const CloseButton = styled.div `
    position: absolute;
    top: 2px;
    left: 6px;;
    background-color: transparent;
    cursor: pointer;
`;


export {
ModalWrapper,
ModalContent,
CloseButton,
};