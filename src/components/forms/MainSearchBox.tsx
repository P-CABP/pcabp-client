import SearchIcon from "@mui/icons-material/Search";
import { Box, styled, TextField } from "@mui/material";

const MainSearchBox = () => {
  return (
    <StyledMainSearchBox className="main-search-box">
      <StyledInput />
      <StyledSearchIcon />
    </StyledMainSearchBox>
  );
};

const StyledMainSearchBox = styled(Box)`
  width: 400px;
  height: 36px;

  padding: 0 12px;

  display: flex;
  align-items: center;
  column-gap: 8px;

  border: 2px solid ${({ theme }) => theme.palette.main.primary};
  border-radius: 8px;
`;

const StyledInput = styled(TextField)`
  width: 100%;
  height: 24px;

  & .MuiInputBase-root {
    & .MuiInputBase-input {
      padding: 0;
    }

    & .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.main.primary};
`;

export default MainSearchBox;
