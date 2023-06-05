import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import GithubLogo from '../assets/GithubLogo';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import {
	NavBarWrapper,
	NavigationWrapper,
	LinkWrapper,
	Link,
	ATag,
	ContactButton,
	ContentWrapper,
	WebsiteAndContactWrapper,
	Logo,
} from './NavBar.styled';
import SkillsRibbon from '../SkillsRibbon/SkillsRibbon';

const isMobile = window.innerWidth <= 768;

const linkStyle = {
	textDecoration: 'none',
	color: 'black',
	fontSize: '18px',
	fontWeight: '600',
};

const NavBar = ({ testId, className, skills, aboutItems, aboutItemsModalContent }) => {
	return (
		<NavBarWrapper
			className={className}
			data-test-id={testId && `${testId}-nav-bar`}
		>
			<NavigationWrapper>
				{!isMobile && (
					<Logo>
						D<sup style={{ fontSize: '18px' }}>2</sup>
					</Logo>
				)}
				<LinkWrapper>
					<Link>
						<NavLink style={linkStyle} to="/">
							Home
						</NavLink>
					</Link>
					<Link>
						<NavLink style={linkStyle} to="/about">
							About
						</NavLink>
					</Link>
				</LinkWrapper>
				<WebsiteAndContactWrapper>
					<ATag href="https://github.com/dpd1208/portfolio" target="_blank">
						<i
							class="fa fa-github fa-2x"
							style={{ width: '60px', color: 'black' }}
						/>
					</ATag>
					<ATag>
						<NavLink style={linkStyle} to="/contact">
							<i
								class="fa fa-envelope fa-2x"
								style={{ width: '60px', color: 'black', marginBottom: '3px' }}
							/>
						</NavLink>
					</ATag>
				</WebsiteAndContactWrapper>
			</NavigationWrapper>
			<SkillsRibbon skills={skills} />
			<ContentWrapper></ContentWrapper>
			<Routes>
				<Route path="/" element={<Home aboutItems={aboutItems} />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</NavBarWrapper>
	);
};

export default NavBar;
