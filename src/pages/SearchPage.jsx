import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SimpleGrid, useDisclosure, ModalOverlay } from "@chakra-ui/react";
import LoadingSpiner from "../components/LoadingSpiner";
import CardMenu from "../components/CardMenu";
import ModalMenu from "../components/ModalMenu";

function SearchPage() {
  let { query } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [id, setId] = useState(648279);
  const [dataSatuan, setDataSatuan] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getFoods(query);
  }, [query]);

  const getFoods = async (name) => {
    const chek = localStorage.getItem(name);

    if (chek) {
      setData(JSON.parse(chek));
      setLoading(false);
    } else {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const resp = await req.json();
      // console.log(resp);

      const searchQuery = resp.results.map(async (el) => {
        const url = `https://api.spoonacular.com/recipes/${el.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`;
        const req = await fetch(url);
        const resp = await req.json();
        return resp;
      });
      const temp = await Promise.all(searchQuery);
      localStorage.setItem(name, JSON.stringify(temp));
      console.log(temp);
      setData(temp);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodItem(id);
  });

  const getFoodItem = async (idMenu) => {
    const chek = localStorage.getItem(`${query}Detail${idMenu}`);
    if (chek) {
      setDataSatuan(JSON.parse(chek));
      setLoading2(false);
    } else {
      const url = `https://api.spoonacular.com/recipes/${idMenu}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`;
      const req = await fetch(url);
      const resp = await req.json();
      localStorage.setItem(`${query}Detail${idMenu}`, JSON.stringify(resp));
      setDataSatuan(resp);
      setLoading2(false);
    }
  };
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
    onOpen();
  };
  return (
    <>
      {loading && <LoadingSpiner />}
      {!loading && (
        <>
          {loading2 && <LoadingSpiner />}
          {!loading2 && (
            <ModalMenu
              isOpen={isOpen}
              onClose={onClose}
              overlay={overlay}
              data={dataSatuan}
            />
          )}
          <SimpleGrid columns={[1, 2]} spacing={8} m="10px">
            {data.map((el) => {
              return (
                <CardMenu
                  data={el}
                  klik={() => {
                    handleclik(el.id);
                  }}
                  key={el.id}
                />
              );
            })}
          </SimpleGrid>
        </>
      )}
    </>
  );
}

export default SearchPage;
