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

export default function AddProject() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string>("");
  return (
    <>
      <HeaderSearch />
      <Container
        size={"lg"}
        my={10}
        style={{ border: "1px solid #ccc", borderRadius: "9px" }}
      >
        <h1>Add new product</h1>
        <p>Manage Product</p>
        <Divider />
        <form>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Input.Wrapper label="Product Name" w={"100%"} size="lg">
                <Input placeholder="Product name" size="lg" />
              </Input.Wrapper>
            </div>
            <div style={{ width: "45%" }}>
              <Input.Wrapper label="SKU" w={"100%"}>
                <Input placeholder="SKU" size="lg" />
              </Input.Wrapper>
            </div>
          </Flex>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Autocomplete
                label="Product Type"
                w={"100%"}
                size="lg"
                placeholder="Type or select product type"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
            <div style={{ width: "45%" }}>
              <Autocomplete
                label="Unit"
                w={"100%"}
                size="lg"
                placeholder="Type or select unit"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
          </Flex>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Autocomplete
                label="Category"
                w={"100%"}
                size="lg"
                placeholder="Type or select product type"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
            <div style={{ width: "45%" }}>
              <Autocomplete
                label="Sub Category"
                w={"100%"}
                size="lg"
                placeholder="Type or select unit"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
          </Flex>
          <Flex justify={"space-between"} py={10}>
            <div className="w-6/12 bg-red-500" style={{ width: "45%" }}>
              <Autocomplete
                label="Brand"
                w={"100%"}
                size="lg"
                placeholder="Type or select product type"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
            </div>
            <div style={{ width: "45%" }}>
              <Input.Wrapper label="Current Stock" w={"100%"} size="lg">
                <Input placeholder="Quantity" size="lg" />
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
                setValue(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <TextInput
                  label="Pick value or type anything"
                  placeholder="Pick value or type anything"
                  value={value}
                  size="lg"
                  onChange={(event) => {
                    setValue(event.currentTarget.value);
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
              <Input placeholder="" size="lg" defaultValue={10} />
            </Input.Wrapper>
          </div>
          <div
            style={{ width: "45%", marginTop: "15px", marginBottom: "15px" }}
          >
            <Input.Wrapper label="Profit Percent" w={"100%"} size="lg">
              <Input placeholder="" size="lg" defaultValue={0} />
            </Input.Wrapper>
          </div>
          <div
            style={{ width: "45%", marginTop: "15px", marginBottom: "15px" }}
          >
            <Input.Wrapper label="Default Selling Price" w={"100%"} size="lg">
              <Input placeholder="" size="lg" defaultValue={0} />
            </Input.Wrapper>
          </div>

          <Button> Save &amp; Add Stock </Button>
          <br />
          <br />
        </form>
      </Container>
    </>
  );
}
