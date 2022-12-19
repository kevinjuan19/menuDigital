import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <HStack className="bg-slate-100 p-2" justifyContent="space-around">
        <Link to="/">
          <Text fontWeight="bold" className="text-amber-600 hover:text-black">
            Menuku
          </Text>
        </Link>
        <Search />
        <Link
          className="hover:text-amber-700  font-thin text-xl"
          to="/menu/Japanese"
        >
          Japanese
        </Link>
        <Link
          className="hover:text-amber-600  font-thin text-xl"
          to="/menu/american"
        >
          Amerian
        </Link>
        <Link
          className="hover:text-amber-600  font-thin text-xl"
          to="/menu/italian"
        >
          Italian
        </Link>
        <Link
          className="hover:text-amber-600  font-thin text-xl active:text-amber-600"
          to="/menu/thai"
        >
          Thai
        </Link>
      </HStack>
    </>
  );
}
export default Navbar;
