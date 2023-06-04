import styled from 'styled-components';

const NavBarWrapper = styled.div `
  position: relative;
  background-color: rgba(0,0,0,0.8);
  height: 60px;
`;

const NavigationWrapper = styled.div `
  display: flex;
  width: 100%;
`;

const LinkWrapper = styled.div `
  position: relative;
  display: flex;
  height: 60px;
  width: 50%;
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
  width: 50%;
  height: 60px;
`;

const ATag = styled.a `
  display: flex;
  color: white;
  justify-content: end;
  align-items: center;
  text-decoration: none;
`;

const ContactButton = styled.a `
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
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
    ATag,
    ContactButton,
    WebsiteAndContactWrapper,
    ContentWrapper,
};