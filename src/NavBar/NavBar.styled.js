import styled from 'styled-components';

const NavBarWrapper = styled.div `
  position: relative;
  background-color: rgba(0,0,0,0.8);
  height: 42px;
`;

const NavigationWrapper = styled.div `
  display: flex;
  width: 100%;
`;

const LinkWrapper = styled.div `
  position: relative;
  display: flex;
  height: 42px;
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

const WebsiteAndContactWrapper = styled.div `
  display: flex;
  color: white;
  align-items: center;
  justify-content: end;
  width: 82%;
  height: 42px;
`;

const Website = styled.a `
  display: flex;
  color: white;
  width: 150px;
  justify-content: end;
  align-items: center;
  text-decoration: none;
`;

const ContactButton = styled.a `
  display: flex;
  color: white;
  width: 100px;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid white;
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
    Website,
    ContactButton,
    WebsiteAndContactWrapper,
    ContentWrapper,
};