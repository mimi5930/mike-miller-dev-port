import React, { useState } from 'react';
import { Flex, Button, Link, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = props => {
  const navigate = useNavigate();

  const [activeNav, setActiveNav] = useState('about');

  const navClickHandler = event => {
    setActiveNav(event.target.id);
  };

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
          onClick={() => {
            setActiveNav('about');
            navigate('/');
          }}
        />
        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          onClick={navClickHandler}
        >
          <Link
            id="about"
            mr="5"
            color={activeNav === 'about' && 'red.500'}
            onClick={() => navigate('/')}
          >
            About
          </Link>
          <Link
            id="portfolio"
            mr="5"
            color={activeNav === 'portfolio' && 'green.500'}
            onClick={() => navigate('/portfolio')}
          >
            Portfolio
          </Link>
          <Link id="resume" mr="5" color={activeNav === 'resume' && 'blue.500'}>
            Resume
          </Link>
          <Button
            variant="outline"
            colorScheme={activeNav === 'contact' ? 'purple' : 'white'}
            id="contact"
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
