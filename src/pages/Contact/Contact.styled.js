import styled from 'styled-components';

const SectionWrapper = styled.div `
display: block;
background: linear-gradient(to bottom right, #070630 0%,#060454 100%);
background-repeat: no-repeat;
height: 88vh;

@media (min-width: 768px) {
  height: 84vh;
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

@media (min-width: 768px) {
    width: 50%;
    text-align: left;
    margin-left: 6%;
    height: unset;
}
`;

const Title = styled.div `
font-size: 72px;
font-family: 'Permanent Marker', cursive;
color: white;

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

@media (min-width: 768px) {
    width: 50%;
}
`;


const Tagline = styled.div `
font-size: 24px;
font-family: 'Permanent Marker', cursive;
font-weight: 500;
text-align: center;
margin-bottom: 12px;
color: white;
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
  font-size: 18px;
  font-family: 'Permanent Marker', cursive !important;
    background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 6px #00000;
    border-radius: 10px;
    display: block;
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