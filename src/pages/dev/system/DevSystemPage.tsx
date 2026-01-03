import { Button, Stack } from "@mui/material";

import {
  SystemModalMessageType,
  useAlert,
  useConfirm,
} from "@/stores/system-modal-store";
import { SystemToastMessageType, useToast } from "@/stores/system-toast-store";

const DevSystemPage = () => {
  const openToast = useToast();
  const confirm = useConfirm();
  const alert = useAlert();

  const handleToastOpen = (type: SystemToastMessageType) => {
    openToast({
      type,
      message: `Toast ${type}`,
    });
  };

  const handleConfirmOpen = () => {
    confirm({
      message: "Confirm",
      onConfirm: () => {
        console.log("Confirm");
      },
    });
  };

  const handleAlertOpen = (type: SystemModalMessageType) => {
    alert({
      type,
      message: `Alert ${type}`,
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
      <Button variant="contained" onClick={handleConfirmOpen}>
        Modal Confirm
      </Button>
      <Button variant="contained" onClick={() => handleAlertOpen("info")}>
        Modal Info
      </Button>
      <Button variant="contained" onClick={() => handleAlertOpen("success")}>
        Modal Success
      </Button>
      <Button variant="contained" onClick={() => handleAlertOpen("error")}>
        Modal Error
      </Button>
    </Stack>
  );
};

export default DevSystemPage;
