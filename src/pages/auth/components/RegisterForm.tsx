import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import img1 from "@assets/coverRegister.png";
import { Link } from "react-router-dom";
export const RegisterForm = () => {
  const theme = useTheme(); // Acceso al tema de Material UI

  // Estilos personalizados usando el tema

  const titlestyle = {
    fontFamily: theme.typography.fontFamily,
    color: "#053436",
    fontSize: "1.4rem",
  };

  const linkTextStyle = {
    color: "#49BEB7",
    fontSize: "1rem",
    fontWeight: "bold",
  };
  const paperStyle = {
    padding: 30,
    width: "80%",
    //maxWidth: 400,
    margin: "30px auto",
  };
  const textstyle = {
    fontFamily: theme.typography.fontFamily,
    color: "#0B1035",
    fontSize: "14px",
  };

  const buttonStyle = {
    margin: "20px 0",
    backgroundColor: "#49BEB7",
    color: "#fff",
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
      <Paper
        sx={{
          width: "100vw",
          maxWidth: "100vw",
          marginLeft: "calc(50% - 50vw)",
          backgroundColor: "#F7F7F7",
        }}
      >
        <Grid container spacing={3}>
          {/* Columna de la imagen */}
          <Grid item xs={12} md={6}>
            <div
              style={{
                position: "relative", // Estilo adecuado con position
                width: "100%",
                height: "100%",
              }}
            >
              <img
                alt="background"
                src={img1} // Imagen de fondo
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0, // Imagen debajo de la superposición
                }}
              />
              {/* Capa de superposición */}
              <div
                style={{
                  position: "absolute", // Corrección del error
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(232, 242, 242, 0.5), rgba(0, 128, 128, 0.776))", // Color semitransparente
                  zIndex: 1,
                }}
              />
            </div>
          </Grid>

          {/* Columna del formulario */}
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <Paper elevation={10} style={paperStyle}>
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  alt="logo"
                  src="src/assets/logo-no-background.png"
                  className="responsive"
                  style={{ maxWidth: "290px", marginBottom: "20px" }}
                />
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{ marginBottom: "20px" }}
              >
                <Typography style={titlestyle}>
                  Registrate con nosotros
                </Typography>
              </Grid>

              {/* Fila para Nombre y Apellido */}
              <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Fila para Fecha de Nacimiento y Documento de Identidad */}
              <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Fecha de Nacimiento"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Documento de Identidad"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Campos restantes */}
              <TextField
                label="Correo"
                variant="outlined"
                type="email"
                fullWidth
                required
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Teléfono"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Confirmar Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: "20px" }}
              />
              <Button variant="contained" fullWidth style={buttonStyle}>
                Registrarse
              </Button>
              <Typography style={textstyle}>
                ¿Ya tienes una cuenta? Inicia Sesión{" "}
                <Typography component={Link} to="/login" style={linkTextStyle}>
                  aquí
                </Typography>{" "}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
