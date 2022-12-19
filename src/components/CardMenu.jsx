import {
  Box,
  Image,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function CardMenu({ data, klik, country }) {
  return (
    <Box
      boxShadow="base"
      p="2"
      bg="white"
      textAlign="center"
      onClick={klik}
      className="cursor-pointer"
      key={data.id}
    >
      <Grid
        templateColumns="1fr 2fr 0.7fr"
        alignItems="center"
        justifyItems="center"
        gap="3"
      >
        <GridItem>
          <Image
            src={data.image}
            alt={data.title}
            className="w-50"
            rounded="md"
            shadow="base"
          />
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize="xs">
            {data.title}
          </Heading>
        </GridItem>
        <GridItem>
          <Text fontSize="xs" color="salmon" fontWeight="bold">
            $ {data.pricePerServing}
          </Text>
          <Link to={`/menu/${country}/${data.id}`}>
            <Button
              size="xs"
              variant="ghost"
              color="blue.300"
              fontWeight="light"
            >
              Detail
            </Button>
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CardMenu;
