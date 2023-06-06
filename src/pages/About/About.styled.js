import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 80vh;
  overflow: hidden;
  background-color: #fff5d7;
  align-items: center;
  justify-content: center;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
}


@media (min-width: 768px) {
  justify-content: space-between;
}
  `;

const AboutHeader = styled.div `
  font-size: 42px;
  color: black;
  font-family: 'Abril Fatface', cursive;
  
  @media (min-width: 768px) {
    margin-left: 6%;
    font-size: 60px;
  }
  `;

const AboutBody = styled.div `
  font-size: 18px;
  color: black;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  margin-bottom: 72px;
  align-self: self-start;

  @media (min-width: 768px) {
    margin-left: 6%;
    font-size: 30px;
    margin-bottom: 0px;
  }
  `;

  const PhotoWrapper = styled.div`
    position: relative;
    align-self: self-start;

    @media (min-width: 768px) {
      padding: 100px;
    }
;`

const ProfilePhoto = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  width: 200px;
  margin-left: 6px;
  border-radius: 50%;
  border: 12px solid #dbd551;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  `;

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: end;
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 66vh;

  @media (min-width: 768px) {
    padding: 100px;
    left: 0;
    top: 54vh;
  }
`;

  const StyledButton = styled.a `
  width: 240px;
  margin: 12px;
  display: inline-block;
  font-size: 18px;
  font-family: 'Quicksand', sans-serif !important;
  background-color: #20b2aa;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: black;            
    display: block;
    font-weight: 600;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    text-decoration: none;

  &:hover {
    background-position: right center;
    filter: brightness(1.1);
  }
 
  border-radius: 3px;
`;

export {
  SectionWrapper,
  AboutHeader,
  AboutBody,
  PhotoWrapper,
  ProfilePhoto,
  ButtonContainer,
  StyledButton,
};