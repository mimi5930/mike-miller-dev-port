import React from 'react';
import projects from './featProjects.json';
import { Box, Center, Heading, Image, Text, LinkBox } from '@chakra-ui/react';

const Portfolio = props => {
  const projectTest = {
    name: 'Ritual',
    pic: 'ritual.png',
    alt: "ritual's homepage",
    features: 'MERN, GraphQL, Chakra UI, React useContext',
    url: 'https://ritual-app-01.herokuapp.com/',
    gitHub: 'https://github.com/Metelak/Ritual'
  };

  return (
    <>
      <Center>
        <Heading color="white" mt="8rem">
          Featured Work
        </Heading>
      </Center>
      <Box maxW="md" overflow="hidden" borderRadius="md" bgColor="white">
        <Image
          src={require(`../../img/projects/${projectTest.pic}`)}
          alt={projectTest.alt}
        />
        <Box bgColor="white">
          <Center>
            <Heading m="2">{projectTest.name}</Heading>
          </Center>
          <Center>
            <Text m="2" mb="5">
              {projectTest.features}
            </Text>
          </Center>
        </Box>
      </Box>

      <div>Projects</div>
    </>
  );
};

export default Portfolio;
