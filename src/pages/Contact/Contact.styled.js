import styled from 'styled-components';

const SectionWrapper = styled.div `
display: block;
background-color: #fff5d7;
height: 88vh;

@media (min-width: 768px) {
  height: 86vh;
  position: relative;
  padding: 24px;
  overflow: hidden;
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
justify-content: center;
margin-bottom: 72px;

@media (min-width: 768px) {
    width: 50%;
    text-align: left;
    margin-left: 6%;
    height: unset;
}
`;

const Title = styled.div `
font-size: 72px;
font-family: 'Abril Fatface', cursive;
color: black;

@media (min-width: 768px) {
  font-size: 98px;
  flex-basis: 100%;
`;

const FormWrapper = styled.div `
display: flex;
width: 100%;
justify-content: center;
flex-flow: row wrap;
align-items: center;
align-content: center;
margin-right: 6%;
margin-bottom: 72px;

@media (min-width: 768px) {
    width: 50%;
}
`;


const Tagline = styled.div `
font-size: 24px;
font-family: 'Quicksand', sans-serif !important;
font-weight: 700;
text-align: center;
margin-bottom: 12px;
color: black;
width: 100%;
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
font-family: 'Quicksand', sans-serif !important;
  padding: 6px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
width: 300px;
font-family: 'Quicksand', sans-serif !important;
  padding: 6px;
  height: 120px;
  box-sizing: border-box;
`;


const StyledButton = styled.button`
  width: 300px;
  font-size: 18px;
  font-family: 'Quicksand', sans-serif !important;
  background-color: #feb300;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: black;            
    display: block;
    font-weight: 600;
  }

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
 
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