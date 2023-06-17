import styled from 'styled-components';


const SectionWrapper = styled.div `
  background-color: #ede9d8;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 24px;
    overflow: hidden;
  }
`;

export {
  SectionWrapper,
};