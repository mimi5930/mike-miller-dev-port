import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Homepage = props => {
  return (
    <Center>
      <Box bgColor="blackAlpha.900" mt="25%" p="10" borderRadius="lg">
        <Heading color="white" className="heading">
          "The computer is simply an instrument whose music is ideas"
        </Heading>
        <Flex justifyContent="flex-end" mt="2">
          <Text color="white">Alan Kay</Text>
        </Flex>
      </Box>
    </Center>
  );
};

export default Homepage;
