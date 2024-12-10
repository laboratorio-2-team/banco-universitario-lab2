import { Box, Button, Drawer, InputAdornment, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { MovementsState, TransferParams } from "@interfaces/movements.interface";
import { AuthState } from "@interfaces/auth.interface";
import { getBalanceAsync, getUserAsync } from "@store/async";
import { getContacts } from "@services/modules";
import { ContactData } from "@interfaces/contact.interface";
import { useFormik } from "formik";
import { initialValuesTransfer, validationSchemaTransfer } from "../../../schemas";
import { LoadingStatesEnum } from "@config/constants";
import { useNavigate } from "react-router-dom";
import { transfer } from "@store/slices";
export const CreateTrasfer = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [alias, setAlias] = useState("");
    const [contactData, setContactsData] = useState<ContactData[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { user } = useSelector<RootState>((state) => state.auth) as AuthState;
    const { userBalance, status } = useSelector<RootState>((state) => state.movements) as MovementsState;
    const dispatch = useDispatch<AppDispatch>();
    const toggleDrawer = (newOpen: boolean, lol?:string) => () => {
        values.account_number = lol || values.account_number;
        setOpen(newOpen);
    };
    const formatAccountNumber = (account: string) => {
      if (!account) return ""
      else if (account.length < 20) return account
      return `${account.substring(0, 4)} **** **** **** ${account.substring(16, 21)}`
    };
    const formatCurrency = (amount: number) => {
      if (!amount) return 0
      return new Intl.NumberFormat("es-VE").format(amount);
    };
    const handleAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAlias(e.target.value);
    };
    const onSubmit = async () => {
      if (isValid) {

        await dispatch(getUserAsync(values.account_number));
        dispatch(transfer({amount:values.amount, account_number:values.account_number, description:values.description}));
        if (status === LoadingStatesEnum.SUCCEEDED) {
          navigate("/transfer/confirm");
        }
      }
    };
    const { errors, touched, values, handleSubmit, handleBlur, handleChange, isValid } = useFormik<TransferParams>({
      initialValues:initialValuesTransfer,
      validationSchema:validationSchemaTransfer,
      onSubmit
    })
    useEffect(()=> {
      dispatch(getBalanceAsync());
    },[dispatch]);
    useEffect(()=>{
      const params = { page: 1, page_size: rowsPerPage, alias: alias };
      getContacts(params).then(res => {
        if (!res?.data?.errors?.length) {
          // eslint-disable-next-line no-unsafe-optional-chaining
          const { data } = res?.data;
          setContactsData(data);
        }
      });
    },[alias, rowsPerPage]);
  return (
    <Paper className="!w-2/3 !justify-center ml-[16vw]">
      <form onSubmit={handleSubmit}>
      <Typography className="!ml-12 !py-4" fontFamily={theme.typography.fontFamily} fontWeight={"bold"}>
        Desde mi cuenta
      </Typography>
      <Typography className="!ml-12 !bg-[#DFEAF2] !w-[18vw] !rounded !border-2 !border-[#085e632a]" fontFamily={theme.typography.fontFamily} fontWeight={"medium"}>
        {`${formatAccountNumber(user?.account_number || "1111************1111")} - Bs. ${formatCurrency(userBalance || 0)}`}
      </Typography>
      <TextField 
      className="!flex w-[20vw] !my-6 !ml-12"
      label="Monto a transferir"
      name="amount"
      value={values.amount}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.amount && Boolean(errors.amount?.length)}
      helperText={errors.amount}
      InputProps={{startAdornment: <InputAdornment position="start">Bs</InputAdornment>}}
      />
      <Button className="!text-[#49BEB7] !font-bold !ml-12" onClick={toggleDrawer(true)}>
        <ImportContactsIcon style={{ color: "#49BEB7", marginRight: "10px" }}/>
        Buscar en contactos
      </Button>
      <TextField
      className="!flex w-[20vw] !my-6 !ml-12"
      label="Número de cuenta a transferir"
      name="account_number"
      value={values.account_number}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.account_number && Boolean(errors.account_number?.length)}
      helperText={errors.account_number}
      />
      <TextField 
      className="!flex w-[40vw] !my-6 !ml-12"
      label="Motivo"
      name="description"
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.description && Boolean(errors.description)}
      helperText={errors.description}
      />
      <Button type="submit" className="!ml-[12vw] !my-6 !w-[30vw] !bg-[#085F63] !text-[white]">
        Continuar
      </Button>
      </form>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box className="!w-[20vw]">
          <Typography className="!my-6 text-[#053436]" fontFamily={theme.typography.fontFamily} fontWeight={"bold"} fontSize={"1.5rem"} textAlign={"center"}>
            Buscar Contacto
          </Typography>
          <TextField
          className="!ml-6 !w-[17.5vw]"
          label="Buscar"
          name="alias"
          onChange={handleAliasChange}
          />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Contacto</TableCell>
                <TableCell align="center">Cuenta</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                contactData.map((data) => (
                  <TableRow
                  key={data.id}
                  onClick={
                    toggleDrawer(false, data.account_number)
                  }
                  className="hover:bg-zinc-400"
                  sx={{cursor:"pointer"}}>
                    <TableCell>{data.alias}</TableCell>
                    <TableCell align="right">{formatAccountNumber(data.account_number)}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
            
          </Table>
          <Button
          className="!flex !w-32 !justify-center !ml-32"
          onClick={()=>{setRowsPerPage(rowsPerPage+10)}}>
            Cargar Más
          </Button>
        </Box>
      </Drawer>
    </Paper>
  )
}
