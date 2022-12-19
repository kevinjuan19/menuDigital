import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Box, Container, Image, Heading, Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import LoadingSpiner from "../components/LoadingSpiner";

function MenuDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFoodItem(id);
  }, [id]);

  const getFoodItem = async (idMenu) => {
    const chek = localStorage.getItem(`menuDetail${idMenu}`);
    if (chek) {
      setData(JSON.parse(chek));
      setLoading(false);
    } else {
      const url = `https://api.spoonacular.com/recipes/${idMenu}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`;
      const req = await fetch(url);
      const resp = await req.json();
      localStorage.setItem(`menuDetail${idMenu}`, JSON.stringify(resp));
      setData(resp);
      setLoading(false);
    }
  };

  function Summary() {
    let kalimat = data.summary;
    const temp = parse(kalimat);
    return temp;
  }

  return (
    <>
      {loading && <LoadingSpiner />}
      {!loading && (
        <Container maxW={["sm", "4xl"]}>
          <BackButton />
          <Box>
            <Box display="flex" justifyContent="center">
              <Image src={data.image} />
            </Box>
            <Heading as="h2" textAlign="center">
              {data.title}
            </Heading>
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="xl">
                Ingredients
              </Text>
              {data.extendedIngredients.map((el, i) => {
                if (i === data.extendedIngredients.length - 1) {
                  return el.name + ".";
                }
                return el.name + ", ";
              })}
            </Box>
          </Box>
          <Box textAlign="center">
            <Text fontWeight="bold" fontSize="xl">
              Summary
            </Text>
            <Summary />
          </Box>
        </Container>
      )}
    </>
  );
}
export default MenuDetail;
