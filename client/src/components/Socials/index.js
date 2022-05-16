import React, { useEffect, useState } from 'react';
import { IconButton, Flex, Link, LinkOverlay } from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Socials = props => {
  // array of icons
  const icons = [<FiGithub />, <FiLinkedin />];

  // Hooks
  const [currentIcon, setIcon] = useState(0);
  const [clickedStatus, setClickedStatus] = useState(false);

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
      <Flex flexDir="column">
        {clickedStatus && (
          <Flex flexDir="column" alignItems="center">
            <Link href="https://github.com/mimi5930" isExternal>
              <IconButton
                m="4"
                aria-label="Git Hub"
                isRound
                colorScheme="blackAlpha"
                icon={icons[0]}
                size="lg"
                _hover={{ bgColor: 'whiteAlpha.200' }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/michael-miller-4b72331a2/"
              isExternal
            >
              <IconButton
                m="4"
                aria-label="Linked In"
                isRound
                colorScheme="blackAlpha"
                icon={icons[1]}
                size="lg"
                _hover={{ bgColor: 'whiteAlpha.200' }}
              />
            </Link>
          </Flex>
        )}
        <IconButton
          isRound
          m="8"
          colorScheme="blackAlpha.800"
          size="lg"
          onClick={() => setClickedStatus(!clickedStatus)}
          icon={!clickedStatus ? icons[currentIcon] : <FiArrowUp />}
          _hover={{ bgColor: 'whiteAlpha.200' }}
        ></IconButton>
      </Flex>
    </footer>
  );
};

export default Socials;
