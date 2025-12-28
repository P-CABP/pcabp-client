import { Button, Stack, Typography } from "@mui/material";

import Flex from "@/components/wrappers/Flex";

const DevButtonPage = () => {
  return (
    <Stack rowGap={2}>
      <Stack columnGap={1}>
        <Typography size="24xl" weight="bold">
          Contained Button
        </Typography>
        <Flex columnGap={1}>
          <Button variant="contained" size="large">
            Large Contained Button
          </Button>
          <Button variant="contained" size="medium">
            Medium Contained Button
          </Button>
          <Button variant="contained" size="small">
            Small Contained Button
          </Button>
          <Button variant="contained" size="small" disabled>
            Small Disabled Contained Button
          </Button>
        </Flex>
      </Stack>
      <Stack columnGap={1}>
        <Typography size="24xl" weight="bold">
          Outlined Button
        </Typography>
        <Flex columnGap={1}>
          <Button variant="outlined" size="large">
            Large Outlined Button
          </Button>
          <Button variant="outlined" size="medium">
            Medium Outlined Button
          </Button>
          <Button variant="outlined" size="small">
            Small Outlined Button
          </Button>
          <Button variant="outlined" size="small" disabled>
            Small Disabled Outlined Button
          </Button>
        </Flex>
      </Stack>
      <Stack columnGap={1}>
        {" "}
        <Typography size="24xl" weight="bold">
          Text Button
        </Typography>
        <Flex columnGap={1}>
          <Button variant="text" size="large">
            Large Text Button
          </Button>
          <Button variant="text" size="medium">
            Medium Text Button
          </Button>
          <Button variant="text" size="small">
            Small Text Button
          </Button>
          <Button variant="text" size="small" disabled>
            Small Disabled Text Button
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default DevButtonPage;
