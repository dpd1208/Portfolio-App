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
      data-test-id={testId && `${testId}-modal`}
      className={className}
      showModal={showModal}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <ModalContent>
        <CloseButton
            onClick={() => {
            setShowModal(false);
            console.log('li');
            }}
            className="close">
            <i
                class="fa fa-close fa-2x"
                style={{ width: '60px', color: 'black' }}
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