import React from 'react';
import Project from '../../components/Projects';
import { Center, Flex, Heading } from '@chakra-ui/react';
import projects from './featProjects.json';

const Portfolio = () => {
	return (
		<>
			<Center>
				<Heading color="white" m="5" mt="9rem">
					Featured Work
				</Heading>
			</Center>
			<Flex
				flexDir="row"
				flexWrap="wrap"
				justifyContent="space-evenly"
				bgColor="whiteAlpha.100"
				m="5"
				borderRadius="lg"
				height="65%"
				overflowY="scroll"
				className="projects"
			>
				{projects.map(project => {
					return <Project key={project.name} project={project} />;
				})}
			</Flex>
		</>
	);
};

export default Portfolio;
