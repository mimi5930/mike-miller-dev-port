import React from 'react';
import { Flex, Button, Link, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = props => {
  const navigate = useNavigate();

  return (
    <header style={{ position: 'absolute', width: '100%' }}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="15"
        backgroundColor="blackAlpha.900"
        color="white"
      >
        <Image
          cursor="pointer"
          boxSize="90px"
          src={require('../../img/mike-logo.png')}
          alt="Website logo"
          onClick={() => navigate('/')}
        />
        <Flex justifyContent="space-evenly" alignItems="center">
          <Link mr="5">About</Link>
          <Link mr="5">Portfolio</Link>
          <Link mr="5">Resume</Link>
          <Button variant="outline" colorScheme="white">
            Contact
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
