import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Link } from "react-router-dom";
import { Logo } from "@components";
export const HeaderLanding = () => {


  return (
    <AppBar className="w-full">
      <Container className="w-full">
        <Toolbar className="w-full flex flex-row justify-between" disableGutters>
          <Logo />
          <Grid
            container
            direction={"row"}
            item
            xs={4}
          >
            <PhoneInTalkIcon className="text-primary-50" />
            <Typography className="text-primary-50">+58 212-555-5555</Typography>
            <MeetingRoomIcon className="text-gray-200" />
            <Typography className="text-gray-200" component={Link} to="/login">
              Inicia Sesión
            </Typography>
          </Grid>
          <Button
            variant="contained"
            component={Link}
            to="/register"
            color="primary"
          >
            Registrate
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
