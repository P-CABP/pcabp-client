import { Stack, TextField, Typography } from "@mui/material";

import Flex from "@/components/wrappers/Flex";

const DevInputPage = () => {
  return (
    <Stack rowGap={2}>
      <Stack rowGap={1}>
        <Typography size="24xl" weight="bold">
          Input
        </Typography>
        <Flex columnGap={1}>
          <TextField placeholder="Placeholder" />
          <TextField disabled placeholder="Disabled" />
          <TextField error placeholder="Error" />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default DevInputPage;
