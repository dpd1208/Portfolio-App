import styled from 'styled-components';

const SectionWrapper = styled.div `
display: block;
background-color: ${props => props.theme.colors.ui.bodyBackground};
height: 80vh;

@media (min-width: 768px) {
  height: 80vh;
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
height: 175px;
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
font-family: ${props => props.theme.fonts.mainFont};
color: ${props => props.theme.colors.text.default};

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
font-family: ${props => props.theme.fonts.secondaryFont} !important;
font-weight: 700;
text-align: center;
margin-bottom: 12px;
color: ${props => props.theme.colors.text.default};
width: 100%;
`;

const StyledForm = styled.form `
    width: 300px;
`;


const InputWrapper = styled.div `
width: 300px;
    margin-bottom: 12px;
`;


const StyledInput = styled.input `
width: 300px;
font-family: ${props => props.theme.fonts.secondaryFont} !important;
  padding: 6px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea `
width: 300px;
font-family: ${props => props.theme.fonts.secondaryFont} !important;
  padding: 6px;
  height: 120px;
  box-sizing: border-box;
`;


const StyledButton = styled.button `
  width: 300px;
  font-size: 18px;
  font-family: ${props => props.theme.fonts.secondaryFont} !important;
  padding: 15px 45px;
  text-align: center;
  justify-content: space-between;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  background-color: ${props => props.theme.name === 'coral' ? '#20b2aa' : 'black'};
  border: ${props => props.theme.name === 'coral' ? 'none' : '2px solid #00FF41'};
  color: ${props => props.theme.name === 'coral' ? 'black' : 'white'};
  display: block;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  &:hover {
    background-position: right center;
    text-decoration: none;
    filter: brightness(1.1);
  }
 
  border-radius: 3px;
`;

const Message = styled.div `
  width: 50%;
  font-size: 66px;
  font-weight: 800;
  align-self: center;
  text-align: center;
  margin: 0 auto;
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