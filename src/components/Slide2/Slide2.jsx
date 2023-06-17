import React, { useState, useEffect } from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import Modal from"../Modal/Modal";
import { SectionWrapper, AboutSection, About, ModalButton, InfoBlockWrapper, InfoBlock } from './Slide2.styled';

const Slide2 = ({ testId, className, aboutItems, themeName }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const handleModalOpen = (e, content) => {
    e.preventDefault();
    setModalContent(content);
    setShowModal(true);
  };
  console.log('liii ', themeName);

	return (
    <ThemeProvider theme={themeName}>
      <SectionWrapper
        className={className}
        data-test-id={testId && `${testId}-slide`}
      >
        <AboutSection>
          <About>I can make websites.<br />Here's other stuff I do.</About>
        </AboutSection>
        <InfoBlockWrapper>
          {aboutItems.map((item, i) => 
            <ModalButton onClick={e => handleModalOpen(e, item.modalContent)}>
              <InfoBlock themeName={themeName} className={`info-block-${item.id}`}>{item.description}
              </InfoBlock>
            </ModalButton>
          )}
        </InfoBlockWrapper>
        {showModal && <Modal
          testId={testId}
          className={className}
          showModal={showModal}
          setShowModal={setShowModal}
          modalContent={modalContent}
        />}
      </SectionWrapper>
    </ThemeProvider>
	);
};

export default Slide2;
