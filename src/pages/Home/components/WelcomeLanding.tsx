import { Grid, Paper, Typography } from "@mui/material"
import imagen from "@assets/thought-catalog-23KdVfc395A-unsplash.png"
import v6 from "@assets/v6.svg"
import { CardLanding } from "@components/CardLanding"
import { useTheme } from "styled-components"
export const WelcomeLanding = () => {
    const theme = useTheme();
    const stylefont = {marginTop:'100px', fontFamily:theme.typography.fontFamily, color:'#053436', fontSize:'1.4rem'};
    const stylefont1 = {fontFamily:theme.typography.fontFamily, color:'black', fontSize:'1.5rem'};
  return (
    <Paper style={{backgroundImage:`url(${imagen})`}} sx={{width:'100vw', maxWidth:'100vw', marginLeft:'calc(50% - 50vw)', marginBottom:'25px'}}>
        <Grid container spacing={3}>
            <Grid item xs={6} >
                <Grid container direction={'row'}>
                    <img src={v6} style={{marginTop:'100px', marginLeft:'20%'}}/>
                    <Typography style={stylefont}>
                        Bienvenido al Banco Universitario
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <Typography style={stylefont1}>
                    Empieza tu educación
                </Typography>
                <Typography style={stylefont1}>
                    Financiera Hoy
                </Typography>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
                <Grid container alignContent={'center'} columns={10}>
                    <Grid item xs={2}>
                        <CardLanding svg={0} text={0}/>
                    </Grid>
                    <Grid item xs={2}>
                        <CardLanding svg={1} text={1} color="#085F63" textColor="white"/>
                    </Grid>
                    <Grid item xs={2}>
                        <CardLanding svg={2} text={2}/>
                    </Grid>
                    <Grid item xs={2}>
                        <CardLanding svg={3} text={3}/>
                    </Grid>
                    <Grid item xs={2}>
                        <CardLanding svg={4} text={4}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
  )
}
