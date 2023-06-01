import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import theme from "../theme/theme";

export const LearnMoreButton = styled(Button)({
  margin: "2em 0 0 0",
  textTransform: "uppercase",
  width: "180px",
  padding: "0.4em 1em",
  border: `2px groove ${theme.palette.tertiary.main}`,
  color: theme.palette.tertiary.main,
  borderRadius: 4,
});
