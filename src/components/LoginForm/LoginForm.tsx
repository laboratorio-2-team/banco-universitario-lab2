import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../../assets/Background-Image.png";
import { GlobalStyles } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export const LoginForm: React.FC = () => {
  const theme = useTheme();
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleToggle = () => {
    setRememberMe((prev) => !prev);
  };

  // Estilos personalizados para el formulario
  const formStyle: React.CSSProperties = {
    padding: 30,
    width: "100%",
    maxWidth: 400,
    margin: "auto",
    background: "#fff",
    position: "relative", // Para que el pseudo-elemento se posicione correctamente
    zIndex: 1, // Asegura que el formulario esté por encima del gradiente
  };

  const titlestyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    color: "#053436",
    fontSize: "1.4rem",
  };

  const subTitleStyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    color: "#7B809A",
    fontSize: "0.9rem",
  };

  const buttonStyle: React.CSSProperties = {
    margin: "20px 0",
    backgroundColor: "#49BEB7",
    color: "#fff",
  };

  const textstyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    color: "#0B1035",
    fontSize: "14px",
  };

  const linkTextStyle: React.CSSProperties = {
    color: "#49BEB7",
    fontSize: "0.9rem",
    fontWeight: "bold",
  };

  return (
    <>
      <GlobalStyles
        styles={{
          html: { margin: 0, padding: 0, height: "100%", width: "100%" },
          body: { margin: 0, padding: 0, height: "100%", width: "100%" },
          "#root": {
            height: "100%",
            width: "100%",
            margin: 0,
            padding: 0,
          },
        }}
      />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Cubre todo el área visible
          backgroundPosition: "center", // Centra la imagen
          width: "100vw", // Ocupa el ancho completo de la ventana
          height: "100vh", // Ocupa el alto completo del viewport
          position: "relative", // Para posicionar el pseudo-elemento
          overflow: "hidden", // Evita que el contenido desborde
          display: "flex",
          alignContent: "center",
        }}
      >
        {/* Capa de gradiente */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(rgba(220, 241, 234, 0.191), rgba(29, 149, 131, 0.205))",
            zIndex: 0, // Asegura que el gradiente esté detrás del formulario
          }}
        />

        {/* Formulario dentro de un Paper */}
        <Paper elevation={10} style={formStyle}>
          <Grid
            container
            justifyContent="center"
            style={{ marginBottom: "20px" }}
          >
            <img
              alt="logo"
              src="src/assets/logo-no-background.png"
              className="responsive"
              style={{ maxWidth: "180px", marginBottom: "20px" }}
            />
            <Typography style={titlestyle} gutterBottom>
              Bienvenido a Banca en Linea
            </Typography>
            <Typography style={subTitleStyle}>
              Ingresa tu correo y tu contraseña para comenzar
            </Typography>
          </Grid>

          <Grid container direction="column" spacing={2}>
            {/* Campos del formulario */}
            <Grid item>
              <TextField
                label="Correo"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item style={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={rememberMe}
                    onChange={handleToggle}
                    color="primary"
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    style={{ fontSize: "0.9rem", color: "#7B809A" }}
                  >
                    Recuerdame
                  </Typography>
                }
              />
            </Grid>
          </Grid>

          {/* Botón de inicio de sesión */}
          <Button variant="contained" fullWidth style={buttonStyle}>
            Iniciar Sesión
          </Button>

          <Typography style={textstyle}>
            ¿No tienes una cuenta con nosotros?{" "}
            <Typography style={linkTextStyle} component={Link} to="/register">
              Regístrate
            </Typography>{" "}
          </Typography>
        </Paper>
      </div>
    </>
  );
};
