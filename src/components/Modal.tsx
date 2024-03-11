import { Modal, Group, Text } from "@mantine/core";

export default function ProductModal({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <>
      <Modal opened={opened} onClose={close} size="70%" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          <p>lorem ipsum dolar</p>
        </Group>
      </Modal>
    </>
  );
}
