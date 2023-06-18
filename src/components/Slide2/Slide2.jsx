import React, { useState } from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import Modal from"../Modal/Modal";
import { SectionWrapper, AboutSection, About, ModalButton, InfoBlockWrapper, InfoBlock } from './Slide2.styled';

const Slide2 = ({ testId, className, aboutItems, themeName, activeIndex }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [modalName, setModalName] = useState(false);
  const handleModalOpen = (e, item) => {
    e.preventDefault();
    setModalContent(item.modalContent);
    setModalName(item.description);
    setShowModal(true);
  };

	return (
    <ThemeProvider theme={themeName}>
      <SectionWrapper
        className={className}
        data-test-id={testId && `${testId}-slide`}
      >
        <AboutSection>
          <About activeIndex={activeIndex}>I can make websites.<br />Here's other stuff I do.</About>
        </AboutSection>
        <InfoBlockWrapper activeIndex={activeIndex}>
          {aboutItems.map((item, i) => 
            <ModalButton onClick={e => handleModalOpen(e, item)}>
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
          modalName={modalName}
          themeName={themeName}
        />}
      </SectionWrapper>
    </ThemeProvider>
	);
};

export default Slide2;
