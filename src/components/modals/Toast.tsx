import {
  DoneOutlined,
  InfoOutlined,
  ErrorOutlineOutlined,
} from "@mui/icons-material";
import { Snackbar, SnackbarProps, styled, Typography } from "@mui/material";

import Flex from "@/components/wrappers/Flex";
interface ToastProps extends SnackbarProps {
  message: string;
}

const Toast = ({ type, message, ...snackbarProps }: ToastProps) => {
  return (
    <StyledToast
      type={type}
      message={
        <Flex justifyContent="center" alignItems="center" columnGap={0.5}>
          {type === "info" && <InfoOutlined />}
          {type === "success" && <DoneOutlined />}
          {type === "error" && <ErrorOutlineOutlined />}
          <Typography size="16bs">{message}</Typography>
        </Flex>
      }
      {...snackbarProps}
    />
  );
};

const StyledToast = styled(Snackbar)`
  & .MuiPaper-root {
  }
`;

export default Toast;
