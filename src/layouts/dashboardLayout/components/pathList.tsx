import { Home, } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PaidIcon from '@mui/icons-material/Paid';

export const pathList = [
    {
        to: 'dashboard',
        text: 'Inicio',
        icon: <Home />
    },
    {
        to: '',
        text: 'Historial',
        icon: <HistoryIcon />
    },
    {
        to: '',
        text: 'Contactos',
        icon: <PersonIcon />
    },
    {
        to: '',
        text: 'Configuración',
        icon: <SettingsIcon />
    },
    {
        to: '',
        text: 'Transfererir',
        icon: <PaidIcon />
    },
]