import { Card, Typography } from "@mui/material"
import styled, { useTheme } from "styled-components"


const StyledCard = styled(Card)`
    max-width: 240px;
    min-width: 240px;
    max-height: 240px;
    min-height: 240px;
    height: inherit;
    width: auto;
    flex: 1;
  `;

const CardTypography = styled(Typography)`
    font-weight: 600;
    line-break: auto;
    font-size: 20px;
    text-justify: center;
  `

interface Props {
  svg: string,
  text: string,

}
export const CardLanding = ({ svg = '', text = '' }: Props) => {
  const theme = useTheme();

  return (
    <StyledCard elevation={2} className="w-full h-full px-1 py-20 content-center bg-white hover:bg-primary-main hover:text-white-main lg:mr-4 mb-4 self-center">
      <div className="flex justify-center items-center">
        <img src={svg} width={56} />
      </div>
      <CardTypography fontFamily={theme.typography.fontFamily} textAlign={'center'}>{text}</CardTypography>
    </StyledCard>
  )
}
