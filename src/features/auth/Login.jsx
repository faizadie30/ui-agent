import React from 'react';
import {
  Button,
  ButtonGroup,
  FormControl,
  InputGroup,
  Input,
  Heading,
  VStack,
} from '@chakra-ui/react';

function Login() {
  return (
    <>
      <VStack
        w={{ base: '90%', md: '600px' }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Log In</Heading>
        <FormControl>
          Email
          <InputGroup size="md">
            <Input type="text" />
          </InputGroup>
        </FormControl>
        <FormControl>
          Password
          <InputGroup size="md">
            <Input type="password" />
          </InputGroup>
        </FormControl>
      </VStack>
    </>
  );
}

export default Login;
