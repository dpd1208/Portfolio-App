import styled from 'styled-components';

const SectionWrapper = styled.div `
display: block;

@media (min-width: 768px) {
  position: relative;
  padding: 24px;
  height: 84vh;
  overflow: hidden;
  background-color: gray;
  display: flex;
}
  `;

const DescriptionWrapper = styled.div `
display: flex;
width: 100%;
flex-flow: row wrap;
align-items: center;
align-content: center;
height: 250px;
text-align: center;

@media (min-width: 768px) {
    width: 50%;
    text-align: left;
    margin-left: 6%;
    height: unset;
}
`;

const Title = styled.div `
  font-size: 36px;
  font-weight: 800;
  flex-basis: 100%;
  margin-bottom: 24px;
`;

const Tagline = styled.div `
font-size: 18px;
font-weight: 500;
width: 100%;
`;

const FormWrapper = styled.div `
display: flex;
width: 100%;
justify-content: center;
flex-flow: row wrap;
align-items: center;
align-content: center;
margin-right: 6%;

@media (min-width: 768px) {
    width: 50%;
}
`;

const StyledForm = styled.form`
    width: 300px;
`;


const InputWrapper = styled.div`
width: 300px;
    margin-bottom: 12px;
`;


const StyledInput = styled.input`
width: 300px;
  font-family: 'Geologica', sans-serif !important;
  padding: 6px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
width: 300px;
  font-family: 'Geologica', sans-serif !important;
  padding: 6px;
  height: 120px;
  box-sizing: border-box;
`;


const StyledButton = styled.button`
  width: 300px;
  padding: 6px;
  font-family: 'Geologica', sans-serif !important;
  color: white;
  background-color: blue;
  border-radius: 3px;
`;

const Message = styled.div `
width: 100%;
`;

export {
    SectionWrapper,
    DescriptionWrapper,
    Title,
    Tagline,
    FormWrapper,
    StyledForm,
    InputWrapper,
    StyledInput,
    StyledTextArea,
    StyledButton,
    Message,
};