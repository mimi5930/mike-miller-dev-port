import React from 'react';
import Project from '../../components/Projects';
import { Center, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import projects from './featProjects.json';

const Portfolio = () => {
  return (
    <>
      <Center>
        <Heading color="white" m="5" mt="8rem">
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
      >
        {projects.map(project => {
          return <Project key={project.name} project={project} />;
        })}
      </Flex>
    </>
  );
};

export default Portfolio;
