import Navbar from "../components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Image,
  Box,
  Text,
  Heading,
  useDisclosure,
  ModalOverlay,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpiner from "../components/LoadingSpiner";
import ModalMenu from "../components/ModalMenu";
import MainCourse from "../components/MainCourse";
import Drink from "../components/Drink";
import Dessert from "../components/Dessert";

function Home() {
  const [recomended, setRecomended] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [dataSatuan, setDataSatuan] = useState([]);
  const [id, setId] = useState(648279);
  useEffect(() => {
    getRecomended();
  }, []);

  const getRecomended = async () => {
    const chek = localStorage.getItem(`recomended`);

    if (chek) {
      setRecomended(JSON.parse(chek));
      setLoading(false);
    } else {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const res = await req.json();
      setRecomended(res.recipes);
      localStorage.setItem("recomended", JSON.stringify(res.recipes));
      setLoading(false);
    }
  };
  useEffect(() => {
    getRecomendedItem(id);
  }, [id]);

  const Overlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<Overlay />);

  const handleclik = (idMenu) => {
    setId(idMenu);
    setOverlay(<Overlay />);
    // console.log(dataSatuan.cuisines[0]);
    onOpen();
  };

  const getRecomendedItem = async (idMenu) => {
    const chek = localStorage.getItem(`recomendedDetail${idMenu}`);
    // console.log(JSON.parse(chek))
    if (chek) {
      setDataSatuan(JSON.parse(chek));
      //   setIngredients(data.extendedIngredients);
      setLoading2(false);
    } else {
      const url = `https://api.spoonacular.com/recipes/${idMenu}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`;
      const req = await fetch(url);
      const resp = await req.json();
      localStorage.setItem(`recomendedDetail${idMenu}`, JSON.stringify(resp));
      setDataSatuan(resp);
      //   setIngredients(resp.extendedIngredients);
      setLoading2(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading && <LoadingSpiner />}
      {!loading && (
        <>
          {loading2 && <LoadingSpiner />}
          {!loading2 && (
            <>
              <ModalMenu
                isOpen={isOpen}
                onClose={onClose}
                overlay={overlay}
                data={dataSatuan}
              />
            </>
          )}
          <Box m="2">
            <Heading as="h2" my="3">
              Top Picks
            </Heading>
            <Splide
              options={{
                perPage: 3,
                gap: "1rem",
                breakpoints: {
                  640: { perPage: 1, gap: "1rem" },
                },
              }}
            >
              {recomended.map((el) => {
                return (
                  <SplideSlide
                    key={el.id}
                    onClick={() => {
                      handleclik(el.id);
                    }}
                    className="cursor-pointer"
                  >
                    <Box position="relative" rounded="2xl" overflow="hidden">
                      <Image src={el.image} className="hover:size-200" />
                      <div className="absolute z-10 w-full h-full left-0 bottom-0 bg-gradient-to-b from-white/0 to-black/70 "></div>
                      <div className="absolute z-30  right-0 top-2">
                        <Badge colorScheme="orange" fontSize="xl">
                          {el.pricePerServing}
                        </Badge>
                      </div>
                      <Text
                        position="absolute"
                        zIndex="20"
                        display="flex"
                        textAlign="center"
                        bottom="15%"
                        color="white"
                        justifyContent="center"
                        alignItems="center"
                        width="full"
                        fontWeight="bold"
                        fontSize="xl"
                      >
                        {el.title}
                      </Text>
                    </Box>
                  </SplideSlide>
                );
              })}
            </Splide>
            <MainCourse />
            <Drink />
            <Dessert />
          </Box>
        </>
      )}
    </>
  );
}

export default Home;
