import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 80vh;
  overflow: hidden;
  background-color: #fff5d7;
  align-content: space-evenly;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
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

  @media (min-width: 768px) {
    margin-left: 6%;
    font-size: 30px;
    margin-bottom: 0px;
  }
  `;

  const PhotoWrapper = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
;`

const ProfilePhoto = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  width: auto;
  `;

export {
  SectionWrapper,
  AboutHeader,
  AboutBody,
  PhotoWrapper,
  ProfilePhoto,
};