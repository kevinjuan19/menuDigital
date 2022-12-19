import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Text,
  HStack,
  Grid,
  GridItem,
  Button,
  Badge,
} from "@chakra-ui/react";
function ModalMenu({ isOpen, onClose, overlay, data }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>{data.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="1fr">
            <GridItem m="3">
              <Box mb="3">
                <Image src={data.image} rounded="lg" shadow="lg" />
              </Box>
              <HStack wrap="wrap" gap="2" justifyContent="space-around">
                {data.dishTypes.map((el, i) => {
                  return <Badge key={i}>{el}</Badge>;
                })}
              </HStack>
            </GridItem>
            <GridItem m="3">
              <Text>
                {data.extendedIngredients.map((el, i) => {
                  if (i === data.extendedIngredients.length - 1) {
                    return capitalizeFirstLetter(el.nameClean) + ".";
                  }
                  return capitalizeFirstLetter(el.nameClean) + ", ";
                })}
              </Text>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Box w="full">
            <Text
              fontSize="xl"
              color="salmon"
              fontWeight="bold"
              align="left"
              ml="3"
            >
              $ {data.pricePerServing}
            </Text>
          </Box>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalMenu;
