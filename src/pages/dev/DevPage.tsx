import { Stack } from "@mui/material";
import { NavLink } from "react-router";

const DevPage = () => {
  return (
    <Stack rowGap={1}>
      <NavLink to="/dev/palette">Palette</NavLink>
      <NavLink to="/dev/typography">Typography</NavLink>
    </Stack>
  );
};

export default DevPage;
