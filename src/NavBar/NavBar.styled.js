import styled from 'styled-components';

const NavBarWrapper = styled.div `
  position: relative;
  background-color: rgba(0,0,0,0.8);
  height: 30px;
`;

const NavigationWrapper = styled.div `
  display: flex;
  width: 100%;
`;

const LinkWrapper = styled.div `
  position: relative;
  display: flex;
  height: 30px;
`;

const Link = styled.a `
  position: relative;
  display: flex;
  color: white;
  float: left;
  align-items: center;
  margin-left: 24px;
  width: 36px;
`;

const Name = styled.div `
  position: relative;
  display: flex;
  color: white;
  width: 150px;
  justify-content: start;
  align-items: center;
`;

const ContactButton = styled.a `
  position: absolute;
  display: flex;
  color: white;
  width: 100px;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid white;
  top: 7px;
  right: 0;
`;

const NameAndContactWrapper = styled.div `
  position: absolute;
  display: flex;
  color: white;
  top: 0;
  right: 24px;
  align-items: center;
  width: 50%;
  height: 30px;
`;

const ContentWrapper = styled.div `
  position: relative;
  display: flex;
  color: white;
`;


export {
    NavBarWrapper,
    NavigationWrapper,
    LinkWrapper,
    Link,
    Name,
    ContactButton,
    NameAndContactWrapper,
    ContentWrapper,
};