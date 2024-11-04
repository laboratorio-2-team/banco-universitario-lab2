import { Paper, Typography, Container } from "@mui/material"
import imagen from "@assets/thought-catalog-23KdVfc395A-unsplash.png"
import v6 from "@assets/v6.svg"
import { CardLanding } from "@components/CardLanding"
import { useTheme } from "styled-components"
export const WelcomeLanding = () => {
    const theme = useTheme();
    const stylefont = { marginTop: '100px', fontFamily: theme.typography.fontFamily, color: '#053436', fontSize: '1.4rem' };
    const stylefont1 = { fontFamily: theme.typography.fontFamily, color: 'black', fontSize: '1.5rem' };
    return (
        <Paper className="w-screen" style={{ backgroundImage: `url(${imagen})`, marginLeft:'calc(50% - 50vw)', backgroundSize:'cover',
        backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
            <Container >
                <Container style={{display:'grid', gridTemplateColumns:'0.1fr 1fr'}}>
                    <img src={v6} style={{ marginTop: '100px' }} />
                    <Typography style={stylefont}>
                        Bienvenido al Banco Universitario
                    </Typography>
                </Container>
                <Container>
                    <Typography style={stylefont1}>
                        Empieza tu educación
                    </Typography>
                    <Typography style={stylefont1}>
                        Financiera Hoy
                    </Typography>
                </Container>
                <Container style={{display:'flex', flexDirection:'row'}}>
                    <CardLanding svg={0} text={0} />
                    <CardLanding svg={1} text={1} color="#085F63" textColor="white" />
                    <CardLanding svg={2} text={2} />
                    <CardLanding svg={3} text={3} />
                    <CardLanding svg={4} text={4} />
                </Container>
            </Container>
        </Paper>
    )
}
