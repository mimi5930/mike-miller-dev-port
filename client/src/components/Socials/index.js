import React, { useEffect, useState } from 'react';
import { IconButton, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Socials = props => {
  const [currentIcon, setIcon] = useState(0);

  const icons = [<FiGithub />, <FiLinkedin />];

  useEffect(() => {
    let count = 0;

    function cycleArray() {
      setIcon(count);
      count++;
      if (count === icons.length) count = 0;
    }

    setInterval(cycleArray, 5000);
  }, []);

  return (
    <footer style={{ position: 'fixed', bottom: '0', right: '0' }}>
      <IconButton
        borderRadius="50%"
        m="8"
        colorScheme="blackAlpha"
        size="lg"
        icon={icons[currentIcon]}
      ></IconButton>
    </footer>
  );
};

export default Socials;
