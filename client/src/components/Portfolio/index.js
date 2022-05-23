import projects from './featProjects.json';
import {
	Box,
	Center,
	Heading,
	Image,
	Text,
	useDisclosure,
	IconButton,
	Collapse,
	Flex,
	Fade,
	ButtonGroup,
	Button
} from '@chakra-ui/react';
import { FiGithub, FiGlobe } from 'react-icons/fi';

const Portfolio = props => {
	const { isOpen, onToggle } = useDisclosure();

	const projectTest = projects[1];

	return (
		<>
			<Center>
				<Heading color="white" m="5" mt="8rem">
					Featured Work
				</Heading>
			</Center>
			<Flex justifyContent="space-evenly" bgColor="whiteAlpha.100" m="5">
				<Box
					width="300px"
					overflow="hidden"
					borderRadius="md"
					bgColor="white"
					position="relative"
					onMouseEnter={onToggle}
					onMouseLeave={onToggle}
				>
					<Image
						src={require(`../../img/projects/${projectTest.pic}`)}
						alt={projectTest.alt}
					/>
					<Box bgColor="white">
						<Heading m="2">{projectTest.name}</Heading>
						<Text m="2" mb="5">
							{projectTest.features}
						</Text>
					</Box>
					<Fade in={isOpen}>
						<ButtonGroup
							size="md"
							position="absolute"
							top="35%"
							left="50%"
							ml="-107.845px"
							colorScheme="blackAlpha"
						>
							<a href={projectTest.url} target="_blank" rel="noreferrer">
								<Button leftIcon={<FiGlobe />}>Website</Button>
							</a>
							<a href={projectTest.gitHub} target="_blank" rel="noreferrer">
								<Button leftIcon={<FiGithub />}>Repo</Button>
							</a>
						</ButtonGroup>
					</Fade>
				</Box>
			</Flex>
		</>
	);
};

export default Portfolio;
