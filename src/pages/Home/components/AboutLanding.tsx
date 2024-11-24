import { Paper, Typography, Container } from "@mui/material"
import { useTheme } from "styled-components";
import v6 from '@assets/v6.svg'
import v7 from '@assets/v7.svg'
import v8 from '@assets/v8.svg'
import img1 from '@assets/christina-wocintechchat-com-eZ8g_7Sh0J0-unsplash 1.png'
import img2 from '@assets/krakenimages-376KN_ISplE-unsplash 1.png'
export const AboutLanding = () => {
    const theme = useTheme();
    const titlestyle = { fontFamily: theme.typography.fontFamily, color: "#053436", fontSize: '1.4rem' };
    const textstyle = { fontFamily: theme.typography.fontFamily, color: "#6D6D6D", fontSize: '1rem' };
    const texts = [
        `Somos una institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes.  
Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.`,
        `Queremos ser la mejor opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social.`
    ];
    return (
        <Paper sx={{ marginBottom: '20px', backgroundColor: '#F7F7F7' }}>
            <Container style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <Container>
                    <img src={img2} style={{ marginLeft: '2vw', marginBottom: '-30vh', marginTop: '2vh', height: '60%', width: '70%', maxHeight: '420px' }} />
                    <img src={img1} style={{ marginLeft: '-10vw', height: '60%', width: '70%', maxHeight: '420px' }} />
                </Container>
                <Container>
                    <Container style={{ display: 'grid', gridTemplateColumns: '0.15fr 1fr', marginTop: '3vh' }}>
                        <img src={v6} />
                        <Typography style={titlestyle} >Sobre Nosotros</Typography>
                    </Container>
                    <Container style={{ display: 'grid', gridTemplateColumns: '0.15fr 1fr', marginTop: '3vh' }}>
                        <img src={v7} />
                        <Typography style={titlestyle} >Nuestra Misión</Typography>
                    </Container>
                    <Typography style={textstyle} align="left" padding={4} component={'div'}>
                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{texts[0]}</pre>
                    </Typography>
                    <Container style={{ display: 'grid', gridTemplateColumns: '0.15fr 1fr', marginTop: '3vh' }}>
                        <img src={v8} />
                        <Typography style={titlestyle} >Nuestra Visión</Typography>
                    </Container>
                    <Typography style={textstyle} align="left" padding={4} component={'div'}>
                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{texts[1]}</pre>
                    </Typography>
                </Container>
            </Container>
        </Paper>
    )
}
