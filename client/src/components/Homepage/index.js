import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Header = props => {
  return (
    <Box
      bgImage={require('../../img/home-background.jpg')}
      bgSize="cover"
      height="100vh"
      bgColor="black"
    >
      <Text>Homepage</Text>
    </Box>
  );
};

export default Header;
