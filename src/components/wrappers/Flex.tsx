import { ReactNode } from "react";

import { Stack, StackProps } from "@mui/material";

interface FlexProps extends StackProps {
  children: ReactNode;
}

const Flex = ({ children, ...stackProps }: FlexProps) => {
  return <Stack {...stackProps}>{children}</Stack>;
};

export default Flex;
