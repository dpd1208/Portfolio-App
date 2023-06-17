import styled from 'styled-components';

const NavBarWrapper = styled.div `
  position: relative;
  background-color: ${props => props.theme.colors.ui.headerBackground};
`;

const NavigationWrapper = styled.div `
  display: flex;
  width: 100%;
  border-bottom: 2px solid #A4A7A5;
`;

const LinkWrapper = styled.div `
  position: relative;
  display: flex;
  height: 10vh;
  width: 50%;
  margin-left: 6px;

  @media(min-width: 768px) {
    margin-left: 0px;
  }
`;

const Link = styled.a `
  position: relative;
  display: flex;
  color: ${props => props.theme.colors.text.default};
  font-family: ${props => props.theme.fonts.secondaryFont};
  float: left;
  align-items: center;
  width: 36px;
  font-size: 12px;
  margin-left: 6px;
  margin-right: 6px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-left: 24px;
    margin-right: 12px;
  }
`;

const WebsiteAndContactWrapper = styled.div `
  display: flex;
  color: ${props => props.theme.colors.text.default};
  align-items: center;
  justify-content: end;
  width: 50%;
  height: 60px;
  margin-top: 6px;
`;

const ATag = styled.a `
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
`;

const ContactButton = styled.a `
  display: flex;
  color: ${props => props.theme.colors.text.default};
  justify-content: space-evenly;
  align-items: center;
`;

const ContentWrapper = styled.div `
  position: relative;
  display: flex;
  color: ${props => props.theme.colors.text.default};
`;

const Logo = styled.div `
  position: absolute;
  top: -10px;
  left: calc(50vw - 30px);
  font-size: 102px;
  font-family: 'Cedarville Cursive', cursive;
  width: 60px;
  font-size: 42px;
  color: ${props => props.theme.colors.text.default};
  
  @media (min-width: 768px) {
    font-size: 60px;
  }
`;

const ThemeContainer = styled.div `
  position: relative;
  display: flex;
  color: ${props => props.theme.colors.text.default};
  font-family: ${props => props.theme.fonts.secondaryFont};
  float: left;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 12px;
  width: 80px;
  height: 50px;
  background: transparent;

  @media (min-width: 768px) {
    margin-left: 30px;
    margin-right: 12px;
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
  ThemeContainer,
};