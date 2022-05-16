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
        onClick={() => navigate('/')}
      >
        <Image
          cursor="pointer"
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
