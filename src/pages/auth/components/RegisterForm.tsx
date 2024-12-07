import { Grid, Paper, Typography, TextField, Button, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import img1 from "@assets/coverRegister.png";
import logo from '@assets/logo-no-background.png'
import { Link, useNavigate } from "react-router-dom";
import { FromRegister, initialValuesRegister, validationSchemaRegister } from "../../../schemas/";
import { FormikHelpers, useFormik } from "formik";
import { loginApi, registerApi } from "../../../services/modules/auth";
import { useState } from "react";
export const RegisterForm = () => {
  const theme = useTheme(); // Acceso al tema de Material UI
  const navigate = useNavigate();
  const [messageState, setMessageState] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
    console.log({ event, reason });

    setMessageState(false);
  };
  const formatDate = (date:string) => {
    if (!date) return ""
    return new Date(date).toISOString();
  };
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
  
  const onSubmit = (values: FromRegister, formikHelpers:FormikHelpers<FromRegister>) => {
    values.birth_date = formatDate(values.birth_date);
    if (!errors.first_name && !errors.last_name && !errors.birth_date && !errors.document_number && !errors.email && !errors.phone_number && !errors.password && !errors.confirm){
      formikHelpers.resetForm();
      const apiValues = { first_name:values.first_name, last_name:values.last_name, document_number:values.document_number, birth_date:values.birth_date, phone_number:values.phone_number, email:values.email, password:values.password };
      registerApi(apiValues).then(res =>{
        const { data, errors } = res;
        if (data.errors?.length || errors.length){
          setMessage(data.message);
          setMessageState(true);
        }
        else {
          const { email } = data;
          const loginValues = { email:email, password:values.password }
          loginApi(loginValues).then(res => {
            const { errors, message } = res;
          if (errors.length){
            alert(message);
          }
          else{
            navigate("/dashboard");
          }
          });
        }
      });
    }
  };
  
  const { errors, touched, values, handleSubmit, handleBlur, handleChange } = useFormik<FromRegister>({ 
    initialValues:initialValuesRegister,
    validationSchema:validationSchemaRegister,
    onSubmit
  })

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
          backgroundColor: "#F7F7F7"
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

              <form onSubmit={handleSubmit}>
              {/* Fila para Nombre y Apellido */}
              <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    required
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.first_name && Boolean(errors.first_name?.length)}
                    helperText={errors.first_name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    required
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.last_name && Boolean(errors.last_name?.length)}
                    helperText={errors.last_name}
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
                    name="birth_date"
                    value={values.birth_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.birth_date && Boolean(errors.birth_date)}
                    helperText={errors.birth_date}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Documento de Identidad"
                    variant="outlined"
                    fullWidth
                    required
                    name="document_number"
                    value={values.document_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.document_number && Boolean(errors.document_number?.length)}
                    helperText={errors.document_number}
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
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email?.length)}
                helperText={errors.email}
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Teléfono"
                variant="outlined"
                fullWidth
                required
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone_number && Boolean(errors.phone_number?.length)}
                helperText={errors.phone_number}
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password?.length)}
                helperText={errors.password}
                style={{ marginBottom: "20px" }}
              />
              <TextField
                label="Confirmar Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="confirm"
                value={values.confirm}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.confirm && Boolean(errors.confirm?.length)}
                helperText={errors.confirm ?  'El campo debe ser igual al de contraseña' :''}
                style={{ marginBottom: "20px" }}
              />
              <Button type="submit" variant="contained" fullWidth style={buttonStyle}>
                Registrarse
              </Button>
              </form>
              <Typography style={textstyle}>
                ¿Ya tienes una cuenta? Inicia Sesión{" "}
                <Typography component={Link} to="/login" style={linkTextStyle}>
                  aquí
                </Typography>{" "}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar 
          open={messageState}
          message={message}
          onClose={handleClose}
          autoHideDuration={2500}
          ContentProps={{sx:{backgroundColor:"#085F63"}}}
        />
      </Paper>
    </>
  );
};
