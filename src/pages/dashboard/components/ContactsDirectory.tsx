import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { getContacts } from "../../../services/modules/contact";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContactData } from "@interfaces/contact.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { contact } from "@store/slices";

export const ContactsDirectory = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page_count, setPageCount] = useState(0);
  const [contactsData, setContactsData] = useState<ContactData[]>([]);
  const [alias, setAlias] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const formatAccountNumber = (account: string) => {
    if (!account) return ""
    else if (account.length < 20) return account
    return `${account.substring(0, 4)} **** **** **** ${account.substring(16, 21)}`
  };
  const handleAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(e.target.value);
  };
  const handleChangePage = (e: unknown, newPage: number) => {
    console.log({ e });

    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRowsPerPage(+e.target.value);
    setPage(0);
  };
  const handleClick = (selected: ContactData) => {
    dispatch(contact(selected));
    navigate("/contacts/edit");
  };
  useEffect(() => {
    const params = { page: page+1, page_size: rowsPerPage, alias: alias };
    getContacts(params).then(res => {
      if (!res?.data?.errors?.length) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { data } = res?.data;
        setPageCount(+res?.headers["x-pagination-page-count"]);
        setContactsData(data);
      }
    })
  }, [page, rowsPerPage, alias]);
  return (
    <>
      <Typography className="!ml-12" fontFamily={theme.typography.fontFamily} fontSize={"2rem"}>
        Directorio de Contactos
      </Typography>
      <Button className="!flex !bg-[#085F63] !text-[white] !ml-auto !mr-2 !my-2 !w-32"
        onClick={() => { navigate("/contacts/create") }}
      >
        <AddIcon />
        Agregar
      </Button>
      <TextField
        className="!flex !ml-auto !mr-[11.5vw] !bg-white w-1/6"
        label="Buscar"
        name="alias"
        onChange={handleAliasChange}
      />
      <TableContainer className="flex !w-2/3 !justify-center ml-[16vw]" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Beneficiario</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Descripción</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Numero de Cuenta</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              contactsData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="center">{data.alias}</TableCell>
                  <TableCell align="center">{data.description}</TableCell>
                  <TableCell align="center">{formatAccountNumber(data.account_number)}</TableCell>
                  <TableCell align="center">
                    <Button className="!text-[#49BEB7] !font-bold" onClick={()=>{handleClick(data)}}>
                      Ver Detalle
                      <ArrowForwardIosIcon style={{ color: "#49BEB7", marginLeft: "10px" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20]}
        component={"div"}
        page={page}
        count={page_count}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}
