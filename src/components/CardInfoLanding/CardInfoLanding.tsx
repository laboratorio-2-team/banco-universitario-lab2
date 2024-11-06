import { Card, Typography } from "@mui/material"
import styled, { useTheme } from "styled-components"
import v9 from '../../assets/v9.svg'
import v10 from '../../assets/v10.svg'
import v11 from '../../assets/v11.svg'
import v12 from '../../assets/v12.svg'
import v13 from '../../assets/v13.svg'
interface Props {
  svg?: number,
  text?: number,
}

const StyledCard = styled(Card)`
    height: inherit;
    width: auto;
    flex: 1;
  `;

const CardTypographyTitle = styled(Typography)`
    font-weight: 600;
    line-break: auto;
    font-size: 20px;
    text-justify: center;
  `


export const CardInfoLanding = ({ svg = 0, text = 0 }: Props) => {
  const theme = useTheme();
  const svgList = [v9, v10, v11, v12, v13];
  const texts = ['Disponible en Móvil', 'Gestión de Cuentas Sin Complicaciones', 'Transferencias en Línea Instantáneas',
    'Pagos de Matriculas Sin Complicaciones', 'Seguridad en Cada Transacción'
  ];
  const desc = [
    `Tu banco, siempre contigo. Accede a todos los servicios 24/7.`,
    `Tu dinero, tus reglas. Visualiza y administra tus fondos con facilidad`,
    `Envía dinero a tus amigos tan rápido 
como envías un mensaje.`,
    `Olvídate de las filas. Paga tus 
servicios desde donde estés.`,
    `Tus datos y transacciones, garantizando que tu información personal y financiera esté siempre segura.`
  ];

  return (
    <StyledCard className=" min-h-[300px] min-w-[300px] max-h-[300px] max-w-[300px] lg:min-h-[400px] lg:min-w-[400px] sm:max-h-[400px] sm:max-w-[400px] content-center p-5 bg-white hover:bg-primary-main hover:text-white-main self-center justify-self-center" elevation={2} >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={svgList[svg]} />
      </div>
      <CardTypographyTitle fontFamily={theme.typography.fontFamily} textAlign={'center'}>
        {texts[text]}
      </CardTypographyTitle>
      <Typography fontFamily={theme.typography.fontFamily} component={'div'} textAlign={'center'}>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{desc[text]}</pre>
      </Typography>
    </StyledCard>
  )
}