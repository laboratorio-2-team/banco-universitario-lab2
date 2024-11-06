import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Link } from "react-router-dom";
import { Logo } from "@components";
export const HeaderLanding = () => {

  return (
    <AppBar style={{ background: 'white' }}>
      <Toolbar sx={{ display: 'grid' }} className="w-full grid grid-cols-1 grid-rows-1 lg:grid-rows-2 bg-white" disableGutters>
        <Box
          component='div'
          className="hidden lg:flex flex-row justify-end px-4"
        >
          {/* TODO: Change to an componente */}
          <Box component='div' className="mr-6 flex flex-row flex-nowrap">
            <PhoneInTalkIcon className="text-primary-50" />
            <Typography className="text-primary-50">+58 212-555-5555</Typography>
          </Box>

          {/* TODO: Change to an componente */}
          <Box component='div' className="flex flex-row flex-nowrap">
            <MeetingRoomIcon className="text-gray-200" />
            <Typography className="text-gray-200" component={Link} to="/login">
              Inicia Sesión
            </Typography>
          </Box>
        </Box>
        <hr className="hidden lg:block border border-solid border-gray-600 min-w-[85%] justify-self-center" />
        <Box component='div' className="flex flex-row flex-nowrap justify-between">
          <Logo />
          {/* TODO: Change to an component - use styled */}
          <Box component='div' className="flex flex-row">
            <Box component='div' className="lg:hidden m-0 p-0 mr-4 flex flex-col justify-center items-center">
              <Button
                variant="outlined"
                component={Link}
                to="/login"
                color="secondary"
              >
                Login
              </Button>
            </Box>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              color="primary"
            >
              Registrate
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
