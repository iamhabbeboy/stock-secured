import {
  Autocomplete,
  Button,
  Combobox,
  Container,
  Divider,
  Flex,
  Input,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { HeaderSearch } from "./components/Header/HeaderSearch";
import { useState } from "react";
import { Product } from "./utils/types";
import { db } from "./utils/database";

export default function AddProject() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [unit, setUnit] = useState("");
  const [category, setCategory] = useState("");
  const [sub, setSub] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [profitPercent, setProfitPercent] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [taxType, setTaxType] = useState("");

  const handleStoreProduct = async (e: any) => {
    e.preventDefault();
    const payload: Product = {
      name: name,
      brand: brand,
      type: type,
      unit: unit,
      category: category,
      subCategory: sub,
      sku: sku,
      currentStock: stock,
      purchasedPrice: purchasePrice,
      profitPercent: profitPercent,
      defaultSellingPrice: sellingPrice,
    };
    const resp = await db.products.add(payload);
    if (resp) {
      alert("Product added successfully!");
      window.location.href = "/";
    }
  };
  return (
    <>
      <HeaderSearch />
      <Container
        size={"lg"}
        style={{ border: "1px solid #ccc", borderRadius: "9px" }}
      >
        <h1>Add new product</h1>
        <p>Manage Product</p>
        <Divider />
        <form onSubmit={handleStoreProduct}>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Input.Wrapper label="Product Name" required w={"100%"} size="lg">
                <Input
                  placeholder="Product name"
                  size="lg"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Input.Wrapper>
            </div>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Autocomplete
                label="Brand"
                w={"100%"}
                size="lg"
                placeholder="Type or select brand"
                data={[]}
                onChange={(value) => setBrand(value)}
                required
              />
            </div>
          </Flex>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Autocomplete
                label="Product Type"
                w={"100%"}
                size="lg"
                placeholder="Type or select product type"
                data={[]}
                onChange={(value) => setType(value)}
                required
              />
            </div>
            <div style={{ width: "45%" }}>
              <Autocomplete
                label="Unit"
                w={"100%"}
                size="lg"
                placeholder="Type or select unit"
                data={["Pcs"]}
                onChange={(value) => setUnit(value)}
                required
              />
            </div>
          </Flex>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Autocomplete
                label="Category"
                w={"100%"}
                size="lg"
                placeholder="Type or select category"
                data={[]}
                onChange={(value) => setCategory(value)}
                required
              />
            </div>
            <div style={{ width: "45%" }}>
              <Autocomplete
                label="Sub Category"
                w={"100%"}
                size="lg"
                placeholder="Type or select sub category"
                data={[]}
                onChange={(value) => setSub(value)}
              />
            </div>
          </Flex>
          <Flex justify={"space-between"} py={10}>
            <div style={{ width: "45%" }}>
              <Input.Wrapper label="SKU" w={"100%"}>
                <Input
                  placeholder="SKU"
                  size="lg"
                  onChange={(evt) => setSku(evt.target.value)}
                />
              </Input.Wrapper>
            </div>
            <div style={{ width: "45%" }}>
              <Input.Wrapper
                required
                label="Current Stock"
                w={"100%"}
                size="lg"
              >
                <Input
                  placeholder="Quantity"
                  size="lg"
                  onChange={(evt) => setStock(evt.target.value)}
                  required
                />
              </Input.Wrapper>
            </div>
          </Flex>
          <Divider my={10} />
          <h4>Price configuration</h4>
          <div style={{ width: "45%" }}>
            <Combobox
              size="lg"
              store={combobox}
              onOptionSubmit={(val) => {
                setTaxType(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <TextInput
                  label="Tax type"
                  placeholder="Select tax type"
                  value={taxType}
                  size="lg"
                  onChange={(event) => {
                    setTaxType(event.currentTarget.value);
                    combobox.openDropdown();
                    combobox.updateSelectedOptionIndex();
                  }}
                  onClick={() => combobox.openDropdown()}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                />
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>
                  <Combobox.Option value="inclusive">Inclusive</Combobox.Option>
                  <Combobox.Option value="exclusive">exclusive</Combobox.Option>
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </div>
          <div
            style={{ width: "45%", marginTop: "15px", marginBottom: "15px" }}
          >
            <Input.Wrapper label="Purchase Price" w={"100%"} size="lg">
              <Input
                placeholder=""
                size="lg"
                type="number"
                step="0.01"
                defaultValue={0}
                onChange={(evt) => setPurchasePrice(Number(evt.target.value))}
              />
            </Input.Wrapper>
          </div>
          <div
            style={{ width: "45%", marginTop: "15px", marginBottom: "15px" }}
          >
            <Input.Wrapper label="Profit Percent" w={"100%"} size="lg">
              <Input
                placeholder=""
                size="lg"
                defaultValue={0}
                type="number"
                leftSection={"%"}
                onChange={(evt) => setProfitPercent(Number(evt.target.value))}
              />
            </Input.Wrapper>
          </div>
          <div
            style={{ width: "45%", marginTop: "15px", marginBottom: "15px" }}
          >
            <Input.Wrapper label="Default Selling Price" w={"100%"} size="lg">
              <Input
                placeholder=""
                size="lg"
                defaultValue={0}
                onChange={(evt) => setSellingPrice(Number(evt.target.value))}
              />
            </Input.Wrapper>
          </div>

          <Button type="submit" size="xl">
            {" "}
            Save &amp; Add Stock{" "}
          </Button>
          <br />
          <br />
        </form>
      </Container>
    </>
  );
}
