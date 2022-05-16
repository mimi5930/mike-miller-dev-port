import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const About = props => {
  return (
    <section>
      <Flex
        mt="20vh"
        bgColor="blackAlpha.900"
        width="50%"
        mr="auto"
        ml="auto"
        height="50vh"
        borderRadius="lg"
        justifyContent="space-evenly"
        flexDir="row"
      >
        <Flex width="50%" flexDir="column" justifyContent="center">
          <Heading size="2xl" color="whiteAlpha.800" margin="3" mb="5">
            Mike Miller
          </Heading>
          <Image
            src={require('../../img/mike.jpg')}
            objectFit="cover"
            height="400px"
          />
        </Flex>
        <Text
          fontSize="2xl"
          width="50%"
          color="whiteAlpha.800"
          mt="auto"
          mb="auto"
        >
          Michael Miller is an aspiring full-stack web developer and musician in
          Woodbury, Minnesota. Miller just graduated from the University of
          Minnesota's Coding Bootcamp through Trilogy Education Services and is
          excited to find ways to utilize his new passion for coding.
        </Text>
      </Flex>
    </section>
  );
};

export default About;
