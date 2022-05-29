import {
  Box,
  Heading,
  Image,
  Text,
  Fade,
  ButtonGroup,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { FiGithub, FiGlobe } from 'react-icons/fi';

const Project = ({ project }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      width="300px"
      overflow="hidden"
      borderRadius="md"
      bgColor="white"
      position="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      m="2"
      className="project-box"
    >
      <Image
        src={require(`../../img/projects/${project.pic}`)}
        alt={project.alt}
      />
      <Box bgColor="white">
        <Heading m="2">{project.name}</Heading>
        <Text m="2" mb="5">
          {project.features}
        </Text>
      </Box>
      <Fade in={isOpen}>
        <ButtonGroup
          size="md"
          position="absolute"
          top="35%"
          left="50%"
          ml="-107.845px"
        >
          <a href={project.url} target="_blank" rel="noreferrer">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: 'blackAlpha.800' }}
              leftIcon={<FiGlobe />}
            >
              Website
            </Button>
          </a>
          <a href={project.gitHub} target="_blank" rel="noreferrer">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: 'blackAlpha.800' }}
              leftIcon={<FiGithub />}
            >
              Repo
            </Button>
          </a>
        </ButtonGroup>
      </Fade>
    </Box>
  );
};

export default Project;
