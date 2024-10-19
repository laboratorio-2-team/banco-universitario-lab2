import { Grid, Paper, Typography } from "@mui/material"
import { useTheme } from "styled-components";
import v6 from '../../assets/v6.svg'
import v7 from '../../assets/v7.svg'
import v8 from '../../assets/v8.svg'
import img1 from '../../assets/christina-wocintechchat-com-eZ8g_7Sh0J0-unsplash 1.png'
import img2 from '../../assets/krakenimages-376KN_ISplE-unsplash 1.png'
export const AboutLanding = () => {
    const theme = useTheme();
    const titlestyle = {fontFamily:theme.typography.fontFamily, color:"#053436", fontSize:'1.4rem'};
    const textstyle = {fontFamily:theme.typography.fontFamily, color:"#6D6D6D", fontSize:'1rem'};
    const textos = [
`Somos una institución financiera comprometida con los estudiantes 
universitarios, brindando soluciones financieras ágiles y eficientes.  
Nuestra misión es facilitar la gestión de sus recursos y contribuir al 
crecimiento económico y personal de nuestros clientes.`,
`Queremos ser la mejor opción financiera para estudiantes universitarios 
en el país. Deseamos ser reconocidos por nuestros servicios innovadores, 
la calidad de atención al cliente y nuestro compromiso con la educación
y el desarrollo social.`
    ];
  return (

    <Paper sx={{width:'100vw', maxWidth:'100vw', marginLeft:'calc(50% - 50vw)', marginBottom:'20px', backgroundColor:'#F7F7F7'}}>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <img src={img2} style={{marginLeft:'50%', marginBottom:'-30vh'}}/>
                <img src={img1} style={{marginLeft:'10%'}}/>
            </Grid>
            <Grid item xs={6}>
                <Grid container direction={'row'}>
                    <img src={v6}/>
                    <Typography style={titlestyle} padding={2}>Sobre Nosotros</Typography>
                </Grid>
                <Grid container direction={'row'}>
                    <img src={v7}/>
                    <Typography style={titlestyle} padding={2}>Nuestra Misión</Typography>
                </Grid>
                <Typography style={textstyle} align="left" padding={4} component={'div'}>
                    <pre style={{whiteSpace:'pre-wrap', wordBreak:'break-all'}}>{textos[0]}</pre>
                </Typography>
                <Grid container direction={'row'}>
                    <img src={v8}/>
                    <Typography style={titlestyle} padding={2}>Nuestra Visión</Typography>
                </Grid>
                <Typography style={textstyle} align="left" padding={4} component={'div'}>
                    <pre style={{whiteSpace:'pre-wrap', wordBreak:'break-all'}}>{textos[1]}</pre>
                </Typography>
            </Grid>
        </Grid>
    </Paper>
  )
}
