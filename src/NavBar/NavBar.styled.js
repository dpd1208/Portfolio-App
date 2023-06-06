import styled from 'styled-components';

const NavBarWrapper = styled.div `
  position: relative;
  background-color: #ffaaab;
`;

const NavigationWrapper = styled.div `
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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