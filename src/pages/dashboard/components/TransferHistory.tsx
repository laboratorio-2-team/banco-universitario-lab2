import { MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { getMovementsApi } from "../../../services/modules/movement";
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { GetMovementsParams, MovementsData } from "@interfaces/movements.interface";

export const TransferHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page_count, setPageCount] = useState(0);
  const [multiplierFilter, setMultiplierFilter] = useState(0);
  const [transferData, setTransferData] = useState<MovementsData[]>([]);
  const formatDate = (date: string) => {
    if (!date) return ""
    return new Date(date).toLocaleDateString("es", { hour12: true, month: "short", hour: "2-digit", minute: "2-digit", day: "2-digit", year: "numeric" });
  };
  const formatCurrency = (amount: number) => {
    if (!amount) return 0
    return new Intl.NumberFormat("es-VE").format(amount);
  }
  const handleChangePage = (e: unknown, newPage: number) => {
    console.log({ e });

    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRowsPerPage(+e.target.value);
    setPage(0);
  };
  const handleMultiplierChange = (event: SelectChangeEvent) => {
    setMultiplierFilter(+event.target.value);
  };
  
  useEffect(() => {
    const params:GetMovementsParams = { page:page+1, page_size:rowsPerPage, multiplier:multiplierFilter }
    getMovementsApi(params).then(res => {
      if (!res?.data?.errors?.length) {
        const { data } = res?.data;
        setPageCount(+res?.headers["x-pagination-page-count"]);
        setTransferData(data);
      }
    });
  }, [page, rowsPerPage, multiplierFilter]);

  return (
    <>
      <Select
        className="!flex !ml-auto !mr-[11.5vw] !bg-white w-1/6"
        value={multiplierFilter.toString()}
        labelId="filter"
        id="multiplierFilter"
        label="Filtrar movimientos"
        onChange={handleMultiplierChange}>
        <MenuItem value={0}>Todos</MenuItem>
        <MenuItem value={-1}>Débitos</MenuItem>
        <MenuItem value={1}>Créditos</MenuItem>
      </Select>
      <TableContainer className="flex !w-2/3 !justify-center ml-[16vw]" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Descripción</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Ref</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Fecha</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Saldo</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Saldo Transferencias</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              transferData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="center">
                    <div className="flex !flex-row">
                      {data.multiplier === 1 && (<ArrowCircleUpOutlinedIcon style={{ color: "#779C9D", marginRight: "20px" }} />)}
                      {data.multiplier === -1 && (<ArrowCircleDownOutlinedIcon style={{ color: "#779C9D", marginRight: "20px" }} />)}
                      {data.description || ""}
                    </div>
                  </TableCell>
                  <TableCell align="center">{`# ${data.id}` || ""}</TableCell>
                  <TableCell align="center">{formatDate(data?.updated_at) || ""}</TableCell>
                  <TableCell className="!text-[#085F63] !font-bold" align="center">{`${formatCurrency(data.balance)} Bs` || ""}</TableCell>
                  <TableCell align="center" style={{ color: `${data.multiplier === -1 ? "#F93652" : "#0AB087"}` }}>
                    {`${data.multiplier === 1 ? "+" : "-"} ${formatCurrency(data.amount)}` || ""}
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
