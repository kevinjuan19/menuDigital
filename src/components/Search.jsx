import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input, HStack } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Overlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay] = useState(<Overlay />);
  const [searchValue, setSerachValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/menu/search/" + searchValue);
    onClose(setSerachValue(""));
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent m="5">
          <ModalBody px="2">
            <form
              onSubmit={(e) => {
                handleSearch(e);
              }}
            >
              <HStack m="2" justifyContent="space-around">
                <AiOutlineSearch className="text-2xl mx-2" />
                <Input
                  value={searchValue}
                  onChange={(e) => setSerachValue(e.target.value)}
                  type="text"
                  variant="unstyled"
                  placeholder="Search Menu..."
                ></Input>
              </HStack>
              <h1> {searchValue}</h1>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <button onClick={onOpen}>
        <AiOutlineSearch className="hover:text-amber-700" />
      </button>
    </>
  );
}

export default Search;
