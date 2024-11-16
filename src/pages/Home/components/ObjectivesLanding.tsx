import { Container, Paper, Typography } from "@mui/material"
import v6 from "@assets/v6.svg"
import img1 from "@assets/unsplash_fMntI8HAAB8.png"
import img2 from "@assets/unsplash_fMntI8HAAB9.png"
import img3 from "@assets/unsplash_fMntI8HAAC0.png"
import img4 from "@assets/unsplash_fMntI8HAAC1.png"
import img5 from "@assets/unsplash_fMntI8HAAC2.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from "styled-components";
import { useEffect, useState } from "react"
export const ObjectivesLanding = () => {
    const theme = useTheme();
    const titlestyle = { fontFamily: theme.typography.fontFamily, color: "#053436", fontSize: '1.4rem' };
    const textstyle = { fontFamily: theme.typography.fontFamily, color: "#0B1035", fontSize: '2rem', marginTop: '18%', minHeight:'65vh' };
    const texts = [
        `Brindar a los estudiantes 
universitarios un servicio 
eficiente y de calidad en la 
gestión de sus recursos
financieros, a través de 
nuestros canales digitales
y nuestros puntos 
de atención presencial.
`,
        `Promover la educación
financiera de los estudiantes
universitarios, a través 
de charlas, talleres y
capacitaciones sobre temas
como el ahorro, la inversión
y el uso responsable
del crédito.
`,
        `Establecer alianzas 
estratégicas con universidades 
y empresas para ofrecer 
beneficios exclusivos a 
nuestros clientes, tales como 
descuentos en matrículas, 
becas, prácticas laborales,
entre otros. 
`,
        `Mantener una cultura 
de innovación y mejora
continua en nuestros procesos,
productos y servicios, para 
estar siempre a 
la vanguardia de las 
necesidades de nuestros 
clientes y del mercado.
`,
        `Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.`
    ];
    const images = [img1, img2, img3, img4, img5];
    const [index, setIndex] = useState(0);
    const [autoPlay, setAutoplay] = useState(true);
    const changeObjective = () => {
        setIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        });
    }
    let timeOut:any = null;
    useEffect(()=>{
        timeOut = autoPlay && setTimeout(()=>{
            changeObjective()
        },2500);
    })
    return (
        <Paper sx={{ marginBottom: '20px', backgroundColor: '#F7F7F7', minHeight: '70vh' }}>
            <Container>
                <Container style={{ display: 'flex', flexDirection: 'row', marginTop: '5vh', justifyContent: 'center' }}>
                    <img src={v6} />
                    <Typography style={titlestyle} padding={1}>Objetivos</Typography>
                </Container>
                <Container style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} onMouseEnter={
                    ()=>{
                        setAutoplay(false);
                        clearTimeout(timeOut);
                        }} onMouseLeave={
                    ()=>{
                        setAutoplay(true);
                        clearTimeout(timeOut);
                    }}>
                    <div style={{ height: '100%', width: '100%', display: 'flex', overflow: 'hidden' }}>
                        {images.map(url => (
                            <img key={url} src={url} style={{ translate: `${-100 * index}%`, transition: 'translate 300ms ease-in-out' }} />))}
                    </div>
                    <Container>
                        <Typography  component={'div'} style={textstyle} padding={2}>
                            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{texts[index]}</pre>
                        </Typography>
                        <div onClick={changeObjective} style={{ cursor: 'pointer', height: '6vh', marginLeft: '10vw' }}>
                            <PlayArrowIcon sx={{ color: "#053436" }} fontSize="large" />
                        </div>
                    </Container>
                </Container>

            </Container>
        </Paper>
    )
}
