import React from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import { SectionWrapper, ListWrapper, Card } from './SkillsRibbon.styled';

const SkillsRibbon = ({ testId, className, skills, themeName }) => {
	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-skills-ribbon`}
			>
				<ListWrapper className="list">
					{skills.map((skill, i) => (
						<Card className={`card card${i + 1}`}>{skill}</Card>
					))}
				</ListWrapper>
				<ListWrapper className="list-bis">
					{skills.map((skill, i) => (
						<Card className={`card card${i + 1}`}>{skill}</Card>
					))}
				</ListWrapper>
			</SectionWrapper>
		</ThemeProvider>
	);
};

export default SkillsRibbon;
