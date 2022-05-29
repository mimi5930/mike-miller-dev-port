import { Heading, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const About = props => {
  return (
    <section>
      <Flex
        mt="20vh"
        bgColor="blackAlpha.900"
        width="80%"
        mr="auto"
        ml="auto"
        height="70vh"
        borderRadius="lg"
        justifyContent="space-evenly"
        flexDir="row"
      >
        <Flex width="50%" flexDir="column" justifyContent="center" m="3">
          <Heading size="2xl" color="whiteAlpha.800" mb="5">
            Mike Miller
          </Heading>
          <Image
            src={require('../../img/mike.jpg')}
            alt="Mike's headshot"
            objectFit="cover"
            height="400px"
            border="2px"
            borderColor="blackAlpha.800"
            borderRadius="2xl"
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
          excited to find ways to utilize his new-found passion for coding.
        </Text>
      </Flex>
    </section>
  );
};

export default About;
