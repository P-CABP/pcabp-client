import { ReactNode } from "react";

import { IconButton, Stack, Typography } from "@mui/material";

interface IconTextButtonProps {
  text?: string;
  size?: "large" | "medium" | "small";
  children?: ReactNode;
  onClick: () => void;
}

const IconTextButton = ({
  text,
  size,
  children,
  onClick,
}: IconTextButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Stack justifyContent="center" alignItems="center" rowGap={0.5}>
      <IconButton size={size} onClick={handleClick}>
        {children}
      </IconButton>
      <Typography size="12xs" weight="semi-bold" noWrap>
        {text}
      </Typography>
    </Stack>
  );
};

export default IconTextButton;
