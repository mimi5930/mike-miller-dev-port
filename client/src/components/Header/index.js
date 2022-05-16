import React from 'react';
import { Flex, Button, Link, Image } from '@chakra-ui/react';

const Header = props => {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="15"
        backgroundColor="black"
        color="white"
      >
        <Image
          boxSize="90px"
          src={require('../../img/mike-logo.png')}
          alt="Website logo"
        />
        <Flex justifyContent="space-evenly" alignItems="center">
          <Link mr="15">About</Link>
          <Link mr="15">Projects</Link>
          <Link mr="15">Resume</Link>
          <Button variant="outline" colorScheme="white">
            Contact
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
