import { Card, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import v1 from '../../assets/v1.svg'
import v2 from '../../assets/v2.svg'
import v3 from '../../assets/v3.svg'
import v4 from '../../assets/v4.svg'
import v5 from '../../assets/v5.svg'
interface Props {
    svg?:number,
    text?:number,
    color?:string,
    textColor?:string
};
export const CardLanding = ({svg=0, text=0, color="white", textColor='black'}:Props) => {
  const theme = useTheme();
  const svgList = [v1, v2, v3, v4, v5];
  const texts = ['Transferencias entre Estudiantes', 'Retiros en Efectivo', 'Depósitos en Efectivo',
    'Pago de Matrícula Estudiantil', 'Cobro de Becas de Estudiantiles'
  ];

  return (
    
    <Card elevation={2} style={{height:'30vh', width:'20vw', alignContent:'center', margin:10, backgroundColor:color, maxWidth:'25vw', marginTop:'15%'}}>
        <div style={{ display:'flex', justifyContent:'center' }}>
        <img src={svgList[svg]}/>
        </div>
        <Typography fontFamily={theme.typography.fontFamily} color={textColor} textAlign={'center'}>{texts[text]}</Typography>
    </Card>
  )
}
