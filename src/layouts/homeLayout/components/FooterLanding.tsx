import { Avatar, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import footerimage from "@assets/Footer_Image.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const FooterLanding = () => {
  const theme = useTheme();
  const stylefont = { fontFamily: theme.typography.fontFamily, color: 'white' };
  return (
    <Paper className="w-full" style={{ backgroundImage: `url(${footerimage})` }}>
        <Typography fontFamily={theme.typography.fontFamily} color='white' style={{display:'flex', justifyContent:'center'}} padding={2}>Información de Contacto</Typography>
      <Container style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
        <div>
        <Typography style={stylefont} align="left" padding={2}>Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela</Typography>
        <Typography style={stylefont} align="left" padding={2}>Teléfono: +58 212-555-5555</Typography>
        <Typography style={stylefont} align="left" padding={2}>Fax: +58 212-555-5556</Typography>
        <Typography style={stylefont} align="left" padding={2}>info@bancouniversitario.com.ve</Typography>
        </div>
        <div>
          <Container style={{display:'grid', gridTemplateColumns:'0.1fr 1fr', marginTop:'3vh'}}>
            <Avatar sx={{ bgcolor: 'white', marginBottom: 2 }}>
              <FacebookIcon sx={{ color: 'black' }} />
            </Avatar>
            <Typography style={stylefont} align="left" padding={1}>@bancouniversitariove</Typography>
          </Container>
          <Container style={{display:'grid', gridTemplateColumns:'0.1fr 1fr', marginTop:'3vh'}}>
            <Avatar sx={{ bgcolor: 'white', marginBottom: 2 }}>
              <InstagramIcon sx={{ color: 'black' }} />
            </Avatar>
            <Typography style={stylefont} align="left" padding={1}>@bancouniversitariove</Typography>
          </Container>
          <Container style={{display:'grid', gridTemplateColumns:'0.1fr 1fr', marginTop:'3vh'}}>
            <Avatar sx={{ bgcolor: 'white', marginBottom: 2 }}>
              <TwitterIcon sx={{ color: 'black' }} />
            </Avatar>
            <Typography style={stylefont} align="left" padding={1}>@bancouniversitariove</Typography>
          </Container>
        </div>
      </Container>
    </Paper>
  )
}
