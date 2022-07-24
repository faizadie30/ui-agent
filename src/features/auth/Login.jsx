import React from 'react';
import {
  Button,
  FormControl,
  InputGroup,
  Input,
  Heading,
  Box,
  VStack,
  Text,
  Link,
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
        <Heading as="h5">Sign In</Heading>
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
        <Button variant="btn-primary" type="submit">
          Log In
        </Button>
        <Box>
          <Text fontSize="md">
            Don't have account?{' '}
            <Link variant="link-primary" href="#">
              Join Now
            </Link>
          </Text>
        </Box>
      </VStack>
    </>
  );
}

export default Login;
