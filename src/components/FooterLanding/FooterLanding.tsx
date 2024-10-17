import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import footerimage from "../../assets/Footer_Image.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const FooterLanding = () => {
  const theme = useTheme();
  const stylefont = {fontFamily:theme.typography.fontFamily, color:'white'};
  return (
    <Paper style={{backgroundImage:`url(${footerimage})`}} sx={{width:'100vw', maxWidth:'100vw', marginLeft:'calc(50% - 50vw)'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography fontFamily={theme.typography.fontFamily} color='white'>Información de Contacto</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={stylefont} align="left" padding={2}>Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela</Typography>
            <Typography style={stylefont} align="left" padding={2}>Teléfono: +58 212-555-5555</Typography>
            <Typography style={stylefont} align="left" padding={2}>Fax: +58 212-555-5556</Typography>
            <Typography style={stylefont} align="left" padding={2}>info@bancouniversitario.com.ve</Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction={'row'}>
            <Avatar sx={{bgcolor:'white', marginBottom:2}}>
              <FacebookIcon sx={{color:'black'}}/>
            </Avatar>
            <Typography style={stylefont} align="left" padding={1}>@bancouniversitariove</Typography>
            </Grid>
            <Grid container direction={'row'}>
            <Avatar sx={{bgcolor:'white', marginBottom:2}}>
              <InstagramIcon sx={{color:'black'}}/>
            </Avatar>
            <Typography style={stylefont} align="left" padding={1}>@bancouniversitariove</Typography>
            </Grid>
            <Grid container direction={'row'} >
            <Avatar sx={{bgcolor:'white', marginBottom:2}}>
              <TwitterIcon sx={{color:'black'}}/>
            </Avatar>
            <Typography style={stylefont} align="left" padding={1}>@bancouniversitariove</Typography>
            </Grid>
          </Grid>
        </Grid>
    </Paper>
  )
}
