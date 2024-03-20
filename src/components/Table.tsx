import { Button, Table, UnstyledButton } from "@mantine/core";
import { Product } from "../utils/types";
// import { useDisclosure } from "@mantine/hooks";
// import ProductModal from "./Modal";
import {
  useReactTable,
  createColumnHelper,
  getPaginationRowModel,
  getSortedRowModel,
  getCoreRowModel,
  SortingState,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { IconArrowRight, IconCaretDown, IconCaretUp, IconEdit, IconEditCircle, IconEyeBolt, IconTrash, IconTrashFilled } from "@tabler/icons-react";

export default function ProductTable({ data }: { data: Product[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [loading, setLoading] = useState(false);
  // const rows = data.map((element) => (
  //   <Table.Tr key={element.sku}>
  //     <Table.Td>
  //       <input type="checkbox" />{" "}
  //     </Table.Td>
  //     <Table.Td>{element.location}</Table.Td>
  //     <Table.Td>{element.sku}</Table.Td>
  //     <Table.Td>{element.name}</Table.Td>
  //     <Table.Td>{element.brand}</Table.Td>
  //     <Table.Td>{element.purchasedPrice}</Table.Td>
  //     <Table.Td>{element.defaultSellingPrice}</Table.Td>
  //     <Table.Td>{element.currentStock}</Table.Td>
  //   </Table.Tr>
  // ));

  const columnHelper = createColumnHelper<Product>();
  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row?.name, {
        header: "Name",
        cell: (info) => {
          return info.getValue();
        },
        id: "name",
      }),
      columnHelper.accessor((row) => row?.brand, {
        header: "Brand",
        cell: (info) => {
          return info.getValue();
        },
        id: "brand",
      }),
      columnHelper.accessor((row) => row?.type, {
        header: "Type",
        cell: (info) => {
          return info.getValue();
        },
        id: "type",
      }),
      columnHelper.accessor((row) => row?.unit, {
        header: "Unit",
        cell: (info) => {
          return info.getValue();
        },
        id: "unit",
      }),
      columnHelper.accessor((row) => row?.defaultSellingPrice, {
        header: "Selling Price",
        cell: (info) => {
          return info.getValue();
        },
        id: "defaultSellingPrice",
      }),
      columnHelper.accessor((row) => row?.currentStock, {
        header: "Current Stock",
        cell: (info) => {
          return info.getValue();
        },
        id: "currentStock",
      }),
      columnHelper.accessor((row) => row?.category, {
        header: "Category",
        cell: (info) => {
          return info.getValue();
        },
        id: "category",
      }),
      columnHelper.accessor((row) => row?.subCategory, {
        header: "Sub Category",
        cell: (info) => {
          return info.getValue();
        },
        id: "subcategory",
      }),
      columnHelper.accessor((row) => row?.subCategory, {
        header: "",
        cell: (info) => {
          const data = info.getValue();
          return (
            <>
            <Button size="xs"><IconArrowRight /></Button>{" "}
            <Button size="xs"><IconEdit /></Button> {" "}
            <Button size="xs"><IconTrash /></Button>
            </>
            )
        },
        id: "option",
      }),
    ],
    [columnHelper, data],
  );

  const table = useReactTable({
    data: data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  const pages = Math.ceil(
    data.length / table.getState().pagination.pageSize,
  );

  return (
    <>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id} >
                  <UnstyledButton onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: <IconCaretUp />,
                      desc: <IconCaretDown />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </UnstyledButton>
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {loading ? (
            <Table.Tr>
              <Table.Td colSpan={6}>
                <div>{/* <Spinner /> */}</div>
              </Table.Td>
            </Table.Tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <Table.Tr
                key={row.id}
                className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Td key={cell.id} scope="row" className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))
          )}
        </Table.Tbody>
      </Table>
    </>
  );
}
