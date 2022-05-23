import React, { useState } from 'react';
import Contact from '../../Contact';
import { Flex, Button, Link, Image, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeNav, setActiveNav] = useState(null);

  const navClickHandler = event => {
    let id = event.target.id;
    if (id) {
      setActiveNav(id);
      document.title = `Mike Miller - ${
        id.charAt(0).toUpperCase() + id.slice(1)
      }`;
    }
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
          id="about"
          cursor="pointer"
          boxSize="90px"
          src={require('../../img/mike-logo.png')}
          alt="Website logo"
          onClick={() => {
            document.title = 'Mike Miller';
            setActiveNav(null);
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
            onClick={() => navigate('/about')}
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
            onClick={onOpen}
          >
            Contact
          </Button>
        </Flex>
      </Flex>
      <Contact isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
