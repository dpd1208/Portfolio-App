import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, NavLink } from "react-router-dom";
import GithubLogo from "../assets/GithubLogo";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import {
  NavBarWrapper,
  NavigationWrapper,
  LinkWrapper,
  Link,
  ATag,
  ContactButton,
  ContentWrapper,
  WebsiteAndContactWrapper,
} from "./NavBar.styled";
import SkillsRibbon from "../SkillsRibbon/SkillsRibbon";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "12px",
};

const NavBar = ({ testId, className, skills }) => {
  return (
    <NavBarWrapper
      className={className}
      data-test-id={testId && `${testId}-nav-bar`}
    >
    <NavigationWrapper>
      <LinkWrapper>
        <Link><NavLink style={linkStyle} to="/">Home</NavLink></Link>
        <Link><NavLink style={linkStyle} to="/about">About</NavLink></Link>
    </LinkWrapper>
        <WebsiteAndContactWrapper>
          <ATag href="https://github.com/dpd1208/" target="_blank"><i class="fa fa-github fa-2x" style={{ width: "60px" }} /></ATag>
          <ATag><NavLink style={linkStyle} to="/contact"><i class="fa fa-envelope fa-2x" style={{ width: "60px" }} /></NavLink></ATag>
        </WebsiteAndContactWrapper>
        </NavigationWrapper>
        <SkillsRibbon skills={skills}/>
      <ContentWrapper>
      </ContentWrapper>
      <Routes>
        <Route path="/" element={<Home skills={skills}/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </NavBarWrapper>
  );
};

NavBar.propTypes = {
  /**
   * Id used for testing
   */
  testId: PropTypes.string,
  /**
   * Class name
   */
  className: PropTypes.string
};

NavBar.defaultProps = {
  testId: null,
  className: null
};

export default NavBar;
