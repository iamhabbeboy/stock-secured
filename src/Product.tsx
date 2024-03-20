import { Container, Flex } from "@mantine/core";
import ProductTable from "./components/Table";
import { HeaderSearch } from "./components/Header/HeaderSearch";
// import ProductModal from "./components/Modal";
// import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { db } from "./utils/database";
import { useEffect, useState } from "react";
import { Product } from "./utils/types";

function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  // const [opened, { close, open }] = useDisclosure(false);
  const fetchData = async () => {
    const products = await db.products.where("id").above(0).toArray();
    setProducts(products || []);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);

  return (
    <>
      <HeaderSearch />
      <Container size={"lg"} mt={10} style={{ border: "1px solid #ccc" }}>
        <Flex justify={"space-between"}>
          <h1 className="text-2xl text-red-500">Products</h1>
          <Link to="/products/create">Create New </Link>
        </Flex>
        <ProductTable data={products} />
      </Container>
      {/* {opened && <ProductModal opened close={close} />} */}
    </>
  );
}

export default Product;
