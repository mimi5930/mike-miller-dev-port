import { Heading, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const About = props => {
	return (
		<Flex
			mt="250px"
			width="80%"
			mr="auto"
			ml="auto"
			height="300px"
			borderRadius="lg"
			alignItems="center"
			justifyContent="space-evenly"
			flexDir="column"
		>
			<Heading size="4xl" color="whiteAlpha.800">
				Mike Miller
			</Heading>
			<Flex
				flexDir="row"
				alignItems="center"
				justifyContent="space-evenly"
				backgroundColor="black"
				m="7"
				borderRadius="2xl"
				borderColor="whiteAlpha.400"
				border="2px"
			>
				<Image
					src={require('../../img/mike.jpg')}
					alt="Mike's headshot"
					maxW="500px"
					border="2px"
					borderColor="blackAlpha.800"
					borderRadius="2xl"
					m="30px"
				/>
				<Text fontSize="2xl" minWidth="300px" color="whiteAlpha.800" m="30px">
					Michael Miller is an aspiring full-stack web developer and musician in
					Woodbury, Minnesota. Miller just graduated from the University of
					Minnesota's Coding Bootcamp through Trilogy Education Services and is
					excited to find ways to utilize his new-found passion for coding.
				</Text>
			</Flex>
		</Flex>
	);
};

export default About;
