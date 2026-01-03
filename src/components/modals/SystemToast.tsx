import { CloseOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import Toast from "@/components/modals/Toast";
import useSystemToastStore from "@/stores/system-toast-store";

const SystemToast = () => {
  const { type, message, confirm, opened, close } = useSystemToastStore();

  const isConfirmNecessary = confirm;

  const handleClose = () => {
    close();
  };

  return (
    <Toast
      type={type}
      message={message}
      open={opened}
      autoHideDuration={isConfirmNecessary ? null : undefined}
      action={
        <IconButton onClick={handleClose}>
          <CloseOutlined />
        </IconButton>
      }
      onClose={handleClose}
    />
  );
};

export default SystemToast;
