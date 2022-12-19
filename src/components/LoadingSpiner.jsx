import { Center, Container, Spinner } from "@chakra-ui/react";

function LoadingSpiner() {
  return (
    <Container>
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </Container>
  );
}

export default LoadingSpiner;
