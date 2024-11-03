import { Card, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import v9 from '../../assets/v9.svg'
import v10 from '../../assets/v10.svg'
import v11 from '../../assets/v11.svg'
import v12 from '../../assets/v12.svg'
import v13 from '../../assets/v13.svg'
interface Props {
    svg?:number,
    text?:number,
    color?:string,
    textColor?:string
};
export const CardInfoLanding = ({svg=0, text=0, color="white", textColor='#0B1035'}:Props) => {
  const theme = useTheme();
  const svgList = [v9, v10, v11, v12, v13];
  const texts = ['Disponible en Móvil', 'Gestión de Cuentas Sin Complicaciones', 'Transferencias en Línea Instantáneas',
    'Pagos de Matriculas Sin Complicaciones', 'Seguridad en Cada Transacción'
  ];
  const desc = [
`Tu banco, siempre contigo. 
Accede a todos los servicios 24/7.`,
`Tu dinero, tus reglas. Visualiza y 
administra tus fondos con facilidad`,
`Envía dinero a tus amigos tan rápido 
como envías un mensaje.`,
`Olvídate de las filas. Paga tus 
servicios desde donde estés.`,
`Tus datos y transacciones, garantizando
que tu información personal y 
financiera esté siempre segura.`
  ];

  return (
    <Card elevation={2} style={{height:'40vh', alignContent:'center', padding:20, backgroundColor:color, maxWidth:'20vw', marginLeft:'25%', marginTop:'2vh'}}>
        <div style={{ display:'flex', justifyContent:'center' }}>
        <img src={svgList[svg]}/>
        </div>
        <Typography fontFamily={theme.typography.fontFamily} color={textColor}>
            {texts[text]}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} color={textColor} component={'div'}>
            <pre style={{whiteSpace:'pre-wrap', wordBreak:'break-all'}}>{desc[text]}</pre>
        </Typography>
    </Card>
  )
}