import { ErrorOutlineOutlined, InfoOutlined } from "@mui/icons-material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import Modal from "@/components/modals/Modal";
import Flex from "@/components/wrappers/Flex";
import useSystemModalStore from "@/stores/system-modal-store";

const SystemModal = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { opened, type, message, close, onConfirm } = useSystemModalStore();

  if (!opened) return null;

  const handleConfirm = () => {
    onConfirm?.();
    close();
  };

  const handleClose = () => {
    close();
  };

  return (
    <Modal
      open={opened}
      title={t("common.label.title.ALERT")}
      size="small"
      onClose={() => {}}
    >
      <Modal.Content>
        <Flex columnGap={2}>
          {type === "confirm" && (
            <TaskAltOutlinedIcon
              fontSize="large"
              sx={{
                color: theme.palette.main.primary,
              }}
            />
          )}
          {type === "info" && (
            <InfoOutlined
              fontSize="large"
              sx={{
                color: theme.palette.main.primary,
              }}
            />
          )}
          {type === "success" && (
            <CheckCircleOutlineOutlinedIcon
              fontSize="large"
              sx={{
                color: theme.palette.semantic.success,
              }}
            />
          )}
          {type === "error" && (
            <ErrorOutlineOutlined
              fontSize="large"
              sx={{
                color: theme.palette.semantic.error,
              }}
            />
          )}
          <Typography>{message}</Typography>
        </Flex>
      </Modal.Content>
      <Modal.Actions>
        <Button variant="outlined" onClick={handleClose}>
          {t("common.label.action.CLOSE")}
        </Button>
        {type === "confirm" && (
          <Button variant="contained" onClick={handleConfirm}>
            {t("common.label.action.CONFIRM")}
          </Button>
        )}
      </Modal.Actions>
    </Modal>
  );
};

export default SystemModal;
