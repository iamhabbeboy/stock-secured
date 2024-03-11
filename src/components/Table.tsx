import { Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProductModal from "./Modal";

const elements = [
  {
    sku: "ORM",
    product: "Oraimo Airpod",
    location: "Lagos",
    unitPurchasePrice: 5000,
    sellingPrice: 7000,
    currentStock: 17,
    brand: "Oraimo",
  },
  {
    sku: "ORM",
    product: "Oraimo Airpod",
    location: "Lagos",
    unitPurchasePrice: 5000,
    sellingPrice: 7000,
    currentStock: 17,
    brand: "Oraimo",
  },
  {
    sku: "ORM",
    product: "Oraimo Airpod",
    location: "Lagos",
    unitPurchasePrice: 5000,
    sellingPrice: 7000,
    currentStock: 17,
    brand: "Oraimo",
  },
  {
    sku: "ORM",
    product: "Oraimo Airpod",
    location: "Lagos",
    unitPurchasePrice: 5000,
    sellingPrice: 7000,
    currentStock: 17,
    brand: "Oraimo",
  },
];

export default function ProductTable() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.sku}>
      <Table.Td>
        <input type="checkbox" />{" "}
      </Table.Td>
      <Table.Td>{element.location}</Table.Td>
      <Table.Td>{element.sku}</Table.Td>
      <Table.Td>{element.product}</Table.Td>
      <Table.Td>{element.unitPurchasePrice}</Table.Td>
      <Table.Td>{element.sellingPrice}</Table.Td>
      <Table.Td>{element.currentStock}</Table.Td>
      <Table.Td>{element.brand}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{""} </Table.Th>
            <Table.Th>Location</Table.Th>
            <Table.Th>SKU</Table.Th>
            <Table.Th>Product</Table.Th>
            <Table.Th>Brand</Table.Th>
            <Table.Th>Unit Purchase Price</Table.Th>
            <Table.Th>Selling Price</Table.Th>
            <Table.Th>Current Stock</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
