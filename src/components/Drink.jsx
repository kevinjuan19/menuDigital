import { Box, Text, Heading, SimpleGrid, HStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { GiCoconuts, GiWaterBottle, GiManualJuicer } from "react-icons/gi";

import { FaCocktail } from "react-icons/fa";

function Drink() {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" my="5">
        Drink
      </Heading>
      <SimpleGrid columns={[2, 4]} gap="3">
        <Link to="/menu/search/smoothies">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiCoconuts className="text-4xl mx-2" />
              <Text>Smoothies</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/water">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiWaterBottle className="text-4xl mx-2" />
              <Text>water</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/juice">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiManualJuicer className="text-4xl mx-2" />
              <Text>Juice</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/cocktail">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <FaCocktail className="text-4xl mx-2" />
              <Text>Cocktail</Text>
            </HStack>
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
}

export default Drink;
