import React from 'react';
import PropTypes from 'prop-types'
import { ModalWrapper, ModalContent, CloseButton } from './Modal.styled';

const Modal = ({
    testId,
    className,
    showModal,
    setShowModal,
    modalContent,
    modalName,
    themeName
}) => {
  return (
    <ModalWrapper
      id={'modal'}
      data-test-id={testId && `${testId}-modal`}
      className={className}
      showModal={showModal}
      onClick={() => {
        document.getElementById('modal').classList.add('.fade-out');
        setShowModal(false);
      }}
    >
      <ModalContent id={'modal-content'}>
        <CloseButton
            onClick={() => {
            setShowModal(false);
            }}
            className="close">
            <i
                class="fa fa-close"
                style={{ width: '20px', color: themeName === 'coral' ? 'black' : '#00FF41' }}
            />
        </CloseButton>
        <p style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>{modalName}</p>
        <p style={{ lineHeight: '28px' }}>{modalContent}</p>
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  /**
   * test id for jest runners
   */
  testId: PropTypes.string,
  /**
   * className for some custom control
   */
  className: PropTypes.string,
  /**
   * Show modal true/false
   */
  showModal: PropTypes.bool,
  /**
   * Content of modal
   */
  content: PropTypes.string,
};

Modal.defaultProps = {
  testId: '',
  className: '',
  showModal: null,
  content: '',
};

export default Modal;