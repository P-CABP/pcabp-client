import { Button, Stack } from "@mui/material";

import { MessageType, useToast } from "@/stores/system-toast-store";

const DevSystemPage = () => {
  const openToast = useToast();

  const handleToastOpen = (type: MessageType) => {
    openToast({
      type,
      message: `Toast ${type}`,
    });
  };

  return (
    <Stack rowGap={1}>
      <Button variant="contained" onClick={() => handleToastOpen("info")}>
        Toast Info
      </Button>
      <Button variant="contained" onClick={() => handleToastOpen("success")}>
        Toast Success
      </Button>
      <Button variant="contained" onClick={() => handleToastOpen("error")}>
        Toast Error
      </Button>
    </Stack>
  );
};

export default DevSystemPage;
