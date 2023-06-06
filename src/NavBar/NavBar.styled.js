import styled from 'styled-components';

const NavBarWrapper = styled.div `
  position: relative;
  background-color: #ada282;
  opacity: 0.8;
`;

const NavigationWrapper = styled.div `
  display: flex;
  width: 100%;
`;

const LinkWrapper = styled.div `
  position: relative;
  display: flex;
  height: 10vh;
  width: 50%;
`;

const Link = styled.a `
  position: relative;
  display: flex;
  color: black;
  float: left;
  align-items: center;
  margin-left: 24px;
  margin-right: 12px;
  width: 36px;
`;

const WebsiteAndContactWrapper = styled.div `
  display: flex;
  color: black;
  align-items: center;
  justify-content: end;
  width: 50%;
  height: 60px;
  margin-top: 6px;
`;

const ATag = styled.a `
  display: flex;
  color: black;
  justify-content: end;
  align-items: center;
  text-decoration: none;
`;

const ContactButton = styled.a `
  display: flex;
  color: black;
  justify-content: space-evenly;
  align-items: center;
`;

const ContentWrapper = styled.div `
  position: relative;
  display: flex;
  color: black;
`;

const Logo = styled.div `
position: absolute;
top: -10px;
left: calc(50vw - 30px);
  font-size: 102px;
  color: black;
  font-family: 'Permanent Marker', cursive;
  width: 60px;
  font-size: 42px;
  
  @media (min-width: 768px) {
    font-size: 60px;
  }
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
  Logo,
};