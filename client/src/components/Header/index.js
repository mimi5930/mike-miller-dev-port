import React from 'react';
import { Flex, Button, Link } from '@chakra-ui/react';

const Header = props => {
  return (
    <header>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        p="15"
        backgroundColor="gray.400"
      >
        <Link mr="15">About</Link>
        <Link mr="15">Projects</Link>
        <Link mr="15">Contact</Link>
        <Button colorScheme="blue">Resume</Button>
      </Flex>
    </header>
  );
};

export default Header;
