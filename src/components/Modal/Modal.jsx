import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { bool, string } from 'prop-types';
import { ModalWrapper, ModalContent, CloseButton } from './Modal.styled';

const Modal = ({
    testId,
    className,
    showModal,
    setShowModal,
    modalContent,
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
                style={{ width: '20px', color: 'black' }}
            />
        </CloseButton>
        {modalContent}
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  /**
   * test id for jest runners
   */
  testId: string,
  /**
   * className for some custom control
   */
  className: string,
  /**
   * Show modal true/false
   */
  showModal: bool,
  /**
   * Content of modal
   */
  content: string,
};

Modal.defaultProps = {
  testId: '',
  className: '',
  showModal: null,
  content: '',
};

export default Modal;