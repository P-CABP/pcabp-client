import { ErrorOutlineOutlined, InfoOutlined } from "@mui/icons-material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import Modal from "@/components/modals/Modal";
import Conditional from "@/components/wrappers/Conditional";
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
      onClose={handleClose}
    >
      <Conditional.Provider conditions={[type]}>
        <Modal.Content>
          <Flex columnGap={2}>
            <Conditional condition="confirm">
              <TaskAltOutlinedIcon
                fontSize="large"
                sx={{
                  color: theme.palette.main.primary,
                }}
              />
            </Conditional>
            <Conditional condition="info">
              <InfoOutlined
                fontSize="large"
                sx={{
                  color: theme.palette.main.primary,
                }}
              />
            </Conditional>
            <Conditional condition="success">
              <CheckCircleOutlineOutlinedIcon
                fontSize="large"
                sx={{
                  color: theme.palette.semantic.success,
                }}
              />
            </Conditional>
            <Conditional condition="error">
              <ErrorOutlineOutlined
                fontSize="large"
                sx={{
                  color: theme.palette.semantic.error,
                }}
              />
            </Conditional>
            <Typography>{message}</Typography>
          </Flex>
        </Modal.Content>
        <Modal.Actions>
          <Button variant="outlined" onClick={handleClose}>
            {t("common.label.action.CLOSE")}
          </Button>
          <Conditional condition="confirm">
            <Button variant="contained" onClick={handleConfirm}>
              {t("common.label.action.CONFIRM")}
            </Button>
          </Conditional>
        </Modal.Actions>
      </Conditional.Provider>
    </Modal>
  );
};

export default SystemModal;
