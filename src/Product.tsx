import { Container, Button, Flex, UnstyledButton } from "@mantine/core";
import ProductTable from "./components/Table";
import { HeaderSearch } from "./components/Header/HeaderSearch";
// import ProductModal from "./components/Modal";
// import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

function Product() {
  // const [opened, { close, open }] = useDisclosure(false);
  return (
    <>
      <HeaderSearch />
      <Container size={"lg"} mt={10} style={{ border: "1px solid #ccc" }}>
        <Flex justify={"space-between"}>
          <h1 className="text-2xl text-red-500">Products</h1>
          <Link to="/products/create">Create New </Link>
        </Flex>
        <ProductTable />
      </Container>
      {/* {opened && <ProductModal opened close={close} />} */}
    </>
  );
}

export default Product;
