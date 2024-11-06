import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import img1 from "@assets/coverRegister.png";
import logo from '@assets/logo-no-background.png'
import { Link } from "react-router-dom";
import React, { useState } from "react";
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

  const [data, setData] = useState({nombre:'',apellido:'',fechaNac:'',id:'',email:'',telefono:'',password:'',confirm:''});

  const valName = ()=>{
    if (!data.nombre) return false
    const re = /^[A-Za-z\-]+$/;
    return re.test(data.nombre);
  };
  const valLast = ()=>{
    if (!data.apellido) return false
    const re = /^[A-Za-z\-]+$/;
    return re.test(data.apellido);
  };
  const valDate = ()=>{
    if (!data.fechaNac) return false
    const today = new Date();
    const birth = new Date(data.fechaNac);
    const age = today.getFullYear() - birth.getFullYear();
    return age >= 15;
  };
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({...data, [e.target.name]:e.target.value});
    console.log(data);
  }
  const valEmail = ()=>{
    if (!data.email) return false
    const re = /\S+@\S+\.\S+/;
    return re.test(data.email);
  }
  const valId = ()=>{
    if (!data.id) return false
    const re = /^[0-9]+$/;
    return re.test(data.id);
  };
  const valPhone = ()=>{
    if (!data.telefono) return false
    const re = /^[0-9]+$/;
    return re.test(data.telefono);
  };
  const valPassword = ()=>{
    if (!data.password) return false
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    return re.test(data.password);
  };
  const valConfirm = ()=>{
    if (!data.password || !data.confirm) return false
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    return re.test(data.confirm) && (data.password === data.confirm)
  }
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
                <a href="/">
                  <img
                    alt="logo"
                    src={logo}
                    className="responsive"
                    style={{ maxWidth: "290px", marginBottom: "20px" }}
                  />
                </a>
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
                    name="nombre"
                    onChange={handleChange}
                    error={!valName()}
                    helperText={!valName() ? (data.nombre ? 'El nombre debe contener solo letras' : 'El campo no puede estar vacío'):''}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    required
                    name="apellido"
                    onChange={handleChange}
                    error={!valLast()}
                    helperText={!valLast() ? (data.apellido ? 'El apellido debe contener solo letras' : 'El campo no puede estar vacío'):''}
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
                    name="fechaNac"
                    onChange={handleChange}
                    error={!valDate()}
                    helperText={!valDate() ? (data.fechaNac ? 'Debe ser mayor de 15 para poder registrarse' : 'El campo no puede estar vacío'):''}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Documento de Identidad"
                    variant="outlined"
                    fullWidth
                    required
                    name="id"
                    onChange={handleChange}
                    error={!valId()}
                    helperText={!valId() ? (data.id ? 'La cedula debe contener solo numeros' : 'El campo no puede estar vacío'):''}
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
                name="email"
                onChange={handleChange}
                error={!valEmail()}
                helperText={!valEmail() ? (data.email ? 'Debe insertar un correo valido' : 'El campo no puede estar vacío'):''}
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Teléfono"
                variant="outlined"
                fullWidth
                required
                name="telefono"
                onChange={handleChange}
                error={!valPhone()}
                helperText={!valPhone() ? (data.telefono ? 'El telefono debe contener solo numeros' : 'El campo no puede estar vacío'):''}
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="password"
                onChange={handleChange}
                error={!valPassword()}
                helperText={!valPassword() ? (data.password ? 'La contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número' : 'El campo no puede estar vacío'):''}
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Confirmar Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="confirm"
                onChange={handleChange}
                error={!valConfirm()}
                helperText={!valConfirm() ? (data.confirm ? 'El campo debe ser igual al de contraseña' : 'El campo no puede estar vacío'):''}
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
