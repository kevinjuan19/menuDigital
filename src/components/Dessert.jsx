import { Box, Text, Heading, SimpleGrid, HStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  GiChocolateBar,
  GiStrawberry,
  GiCakeSlice,
  GiIceCreamCone,
} from "react-icons/gi";

function Dessert() {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" my="5">
        Dessert
      </Heading>
      <SimpleGrid columns={[2, 4]} gap="3">
        <Link to="/menu/search/chocolate">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiChocolateBar className="text-4xl mx-2" />
              <Text>Chocolate</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/strawberry">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiStrawberry className="text-4xl mx-2" />
              <Text>Strawberry</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/cake">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiCakeSlice className="text-4xl mx-2" />
              <Text>Cake</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/ice%20cream">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiIceCreamCone className="text-4xl mx-2" />
              <Text>Ice Cream</Text>
            </HStack>
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
}

export default Dessert;
