import React, { useState } from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';
import Project1 from '../../projectpages/Project1/Project1';
import Project2 from '../../projectpages/Project2/Project2';
import Project3 from '../../projectpages/Project3/Project3';
import {
	NavBarWrapper,
	NavigationWrapper,
	LinkWrapper,
	Link,
	ATag,
	ContentWrapper,
	WebsiteAndContactWrapper,
	Logo,
	ThemeContainer,
} from './NavBar.styled';
import SkillsRibbon from '../SkillsRibbon/SkillsRibbon';

const isMobile = window.innerWidth <= 768;

const linkStyle = {
	textDecoration: 'none',
	lineHeight: '10vh',
};

const NavBar = ({ testId, className, skills, aboutItems, projectNames }) => {
	const [themeName, setThemeName] = useState('coral');
	const handleThemeChange = () => themeName === 'coral' ? setThemeName('digital') : setThemeName('coral');
	const el = document.getElementsByTagName('canvas');
	if (themeName !== 'digital') {
		el[0].style.display = 'none';
	} else {
		el[0].style.display = 'block';
	}
	return (
		<ThemeProvider theme={themeName}>
			<NavBarWrapper
				className={className}
				data-test-id={testId && `${testId}-nav-bar`}
				themeName={themeName}
			>
				<NavigationWrapper>
					{!isMobile && (
						<Logo>
							D<sup style={{ fontSize: '18px' }}>2</sup>
						</Logo>
					)}
					<LinkWrapper>
						<NavLink style={linkStyle} to="/">
							<Link>
								Home
							</Link>
						</NavLink>
						<NavLink style={linkStyle} to="/about">
							<Link>
								Info
							</Link>
						</NavLink>
						<NavLink style={linkStyle} to="/projects">
							<Link style={isMobile ? { marginLeft: '0px' } : { marginLeft: '10px' }}>
								Projects
							</Link>
						</NavLink>
						<ThemeContainer>
							<ATag
								onClick={() => {
									setThemeName('coral');
								}}
							>
								<i
								class="fa-solid fa-umbrella-beach"
								style={{ cursor: 'pointer', position: 'absolute', left: '4px', width: '30px',  marginLeft: '4px', color: themeName === 'coral' ? 'black' : 'white' }}
								/>
							</ATag>
							<ATag
								onClick={() => {
									setThemeName('digital');
								}}
							>
								<i
									class="fa-solid fa-code"
									style={{ cursor: 'pointer', position: 'absolute', left: '44px', width: '30px', marginRight: '4px', color: themeName === 'coral' ? 'black' : 'white' }}
								/>
							</ATag>
						</ThemeContainer>
					</LinkWrapper>
					<WebsiteAndContactWrapper>
						<ATag href="https://github.com/dpd1208/portfolio" target="_blank">
							<i
								class="fa-brands fa-github fa-2x"
								style={{ width: '60px', color: themeName === 'coral' ? 'black' : 'white' }}
							/>
						</ATag>
						<ATag>
							<NavLink style={linkStyle} to="/contact">
								<i
									class="fa fa-envelope fa-2x"
									style={{ width: '60px', color: themeName === 'coral' ? 'black' : 'white', marginTop: '24px' }}
								/>
							</NavLink>
						</ATag>
					</WebsiteAndContactWrapper>
				</NavigationWrapper>
				<SkillsRibbon skills={skills} themeName={themeName} />
				<ContentWrapper></ContentWrapper>
				<Routes>
					<Route path="/" element={<Home aboutItems={aboutItems} themeName={themeName} />} />
					<Route path="about" element={<About themeName={themeName} />} />
					<Route path="projects" element={<Projects projectNames={projectNames} themeName={themeName} />} />
					<Route path="contact" element={<Contact themeName={themeName} />} />
					<Route path="projects/1" element={<Project1 themeName={themeName} />} />
					<Route path="projects/2" element={<Project2 themeName={themeName} />} />
					<Route path="projects/3" element={<Project3 themeName={themeName} />} />
				</Routes>
			</NavBarWrapper>
		</ThemeProvider>
	);
};

export default NavBar;
