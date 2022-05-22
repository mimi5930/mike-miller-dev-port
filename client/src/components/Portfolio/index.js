import React, { useState } from 'react';
import projects from './featProjects.json';
import {
	Box,
	Center,
	Heading,
	Image,
	Text,
	LinkBox,
	useDisclosure,
	Collapse
} from '@chakra-ui/react';

const Portfolio = props => {
	const { isOpen, onToggle } = useDisclosure();

	const projectTest = projects[0];

	return (
		<>
			<Center>
				<Heading color="white" m="5" mt="8rem">
					Featured Work
				</Heading>
			</Center>
			<Box
				onMouseEnter={onToggle}
				onMouseLeave={onToggle}
				width="300px"
				overflow="hidden"
				borderRadius="md"
				bgColor="white"
			>
				<Image
					src={require(`../../img/projects/${projectTest.pic}`)}
					alt={projectTest.alt}
				/>
				<Collapse in={isOpen}>
					<Box bgColor="white">
						<Heading m="2">{projectTest.name}</Heading>

						<Text m="2" mb="5">
							{projectTest.features}
						</Text>
					</Box>
				</Collapse>
			</Box>

			<div>Projects</div>
		</>
	);
};

export default Portfolio;
