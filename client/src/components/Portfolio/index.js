import projects from './featProjects.json';
import {
	Box,
	Center,
	Heading,
	Image,
	Text,
	useDisclosure,
	Flex,
	Fade,
	ButtonGroup,
	Button
} from '@chakra-ui/react';
import { FiGithub, FiGlobe } from 'react-icons/fi';

const Portfolio = props => {
	const { isOpen, onToggle } = useDisclosure();

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
					return (
						<Box
							key={project.name}
							width="300px"
							overflow="hidden"
							borderRadius="md"
							bgColor="white"
							position="relative"
							onMouseEnter={onToggle}
							onMouseLeave={onToggle}
							m="2"
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
									colorScheme="blackAlpha"
								>
									<a href={project.url} target="_blank" rel="noreferrer">
										<Button leftIcon={<FiGlobe />}>Website</Button>
									</a>
									<a href={project.gitHub} target="_blank" rel="noreferrer">
										<Button leftIcon={<FiGithub />}>Repo</Button>
									</a>
								</ButtonGroup>
							</Fade>
						</Box>
					);
				})}
			</Flex>
		</>
	);
};

export default Portfolio;
