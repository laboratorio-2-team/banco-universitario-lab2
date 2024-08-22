import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export const HeaderLanding = () => {
  return (
    <AppBar sx={{background:'#FFFFFF'}} >
     <Container maxWidth="xl">
      <Toolbar disableGutters>
        <img alt="logo" src="src/assets/logo-no-background.png" className="responsive" style={{maxWidth:"300px", flexGrow:1}}/>
        <Grid container direction={"row"} sx={{marginLeft:"auto"}} item xs={4}>
          <PhoneInTalkIcon sx={{color:"#085f63"}}/>
          <Typography color={"#085f63"}>+58 212-555-5555</Typography>
          <MeetingRoomIcon sx={{color:"#9C9C9C"}}/>
          <Typography color={"#9C9C9C"}>Inicia Sesión</Typography>
        </Grid>
        <Button variant="contained" sx={{backgroundColor:"#085f63"}}>Registrate</Button>
      </Toolbar>
     </Container>
    </AppBar>
  )
}
