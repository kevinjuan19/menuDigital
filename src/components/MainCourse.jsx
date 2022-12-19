import { Box, Text, Heading, SimpleGrid, HStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  GiChickenOven,
  GiFrenchFries,
  GiMeat,
  GiRiceCooker,
} from "react-icons/gi";
function MainCourse() {
  return (
    <Box mb="5">
      <Heading as="h2" fontSize="xl" my="5">
        Main Course
      </Heading>
      <SimpleGrid columns={[2, 4]} gap="3">
        <Link to="/menu/search/chicken">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiChickenOven className="text-4xl mx-2" />
              <Text>Chicken</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/french%20fries">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiFrenchFries className="text-4xl mx-2" />
              <Text>French Fries</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/beef">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiMeat className="text-4xl mx-2" />
              <Text>Beef</Text>
            </HStack>
          </Box>
        </Link>
        <Link to="/menu/search/rice">
          <Box
            bgColor="gray.200"
            width="full"
            p="3"
            rounded="3xl"
            fontWeight="medium"
          >
            <HStack>
              <GiRiceCooker className="text-4xl mx-2" />
              <Text>Rice</Text>
            </HStack>
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
}

export default MainCourse;
