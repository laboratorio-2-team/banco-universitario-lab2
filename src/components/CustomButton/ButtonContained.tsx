import styled, { DefaultTheme } from "styled-components";
import { BaseButton } from "./BaseButton";
import { Theme } from "@mui/material";

export const ButtonContained = styled(BaseButton)`
  color: ${({theme} : {theme: DefaultTheme | Theme}) => theme.palette.grey['600']};
`
