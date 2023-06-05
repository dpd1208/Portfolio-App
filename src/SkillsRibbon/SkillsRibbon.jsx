import React, { useEffect, useState } from 'react';
import { SectionWrapper, ListWrapper, Card } from './SkillsRibbon.styled';

const SkillsRibbon = ({ testId, className, skills }) => {
	return (
		<SectionWrapper>
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
	);
};

export default SkillsRibbon;
