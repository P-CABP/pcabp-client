import { ReactElement, ReactNode } from "react";

import { CloseOutlined } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import Flex from "@/components/wrappers/Flex";

type ModalChildren =
  | ReactElement<typeof ModalContent>
  | [ReactElement<typeof ModalContent>, ReactElement<typeof ModalActions>?];

interface ModalProps {
  open: boolean;
  title: string;
  size?: "small" | "medium" | "large";
  children: ModalChildren;
  onClose: () => void;
}

const Modal = ({
  open = false,
  title = "Title",
  size = "medium",
  children,
  onClose,
}: ModalProps) => {
  if (!open) return null;

  const childrenArray = Array.isArray(children) ? children : [children];
  const content = childrenArray[0];
  const actions = childrenArray[1];

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} size={size} onClose={handleClose}>
      <DialogTitle>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <Typography className="" size="30xl" weight="bold">
            {title}
          </Typography>
          <IconButton sx={{ border: "none" }} onClick={handleClose}>
            <CloseOutlined />
          </IconButton>
        </Flex>
      </DialogTitle>
      {content}
      {actions}
    </Dialog>
  );
};

const ModalContent = ({ children }: { children: ReactNode }) => {
  return <DialogContent>{children}</DialogContent>;
};

interface ModalActionsProps {
  align?: "left" | "center" | "right";
  children: ReactNode;
}

const ModalActions = ({ align = "right", children }: ModalActionsProps) => {
  return (
    <DialogActions sx={{ justifyContent: align }}>{children}</DialogActions>
  );
};

Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;
