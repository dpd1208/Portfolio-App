import React, { useEffect, useState } from 'react';
import Modal from"../Modal/Modal";
import { SectionWrapper, AboutSection, About, ModalButton, InfoBlockWrapper, InfoBlock } from './Slide2.styled';

const Slide2 = ({ testId, className, aboutItems, }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const handleModalOpen = (e, content) => {
    e.preventDefault();
    setModalContent(content);
    setShowModal(true);
  };
	return (
		<SectionWrapper
			className={className}
			data-test-id={testId && `${testId}-slide`}
		>
			<AboutSection>
				<About>How I got here.</About>
			</AboutSection>
      <InfoBlockWrapper>
        {aboutItems.map((item, i) => 
          <ModalButton onClick={e => handleModalOpen(e, item.modalContent)}>
            <InfoBlock className={`info-block-${item.id}`}>{item.description}
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
	);
};

export default Slide2;
