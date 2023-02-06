import { Stack } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Group } from "@mantine/core";

function StaffChat() {
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        height: 800
      })}
    >
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>

      <Grid justify="center" align="center">
        <Grid.Col span={9}>
          <TextInput placeholder="Enter message here..." />
        </Grid.Col>

        <Grid.Col span={3}>
          <Button variant="outline">Send</Button>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default StaffChat;
