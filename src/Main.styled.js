import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
  }
`;

const SectionWrapper = styled.div `
  position: relative;
  `;


export {
    GlobalStyle,
    SectionWrapper,
};