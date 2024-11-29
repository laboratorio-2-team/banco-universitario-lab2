import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { getMovementsApi } from "../../../services/modules/movement";
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';

export const TransferHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page_count, setPageCount] = useState(0);
  const [trasferData, setTrasferData] = useState([]);

  const formatDate = (date: string) => {
    if (!date) return ""
    return new Date(date).toLocaleDateString("es", { hour12: true, month: "short", hour: "2-digit", minute: "2-digit", day: "2-digit", year: "numeric" });
  };
  const formatCurrency = (amount: number) => {
    if (!amount) return 0
    return new Intl.NumberFormat("es-VE").format(amount);
  }
  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  useEffect(() => {
    getMovementsApi(page + 1, rowsPerPage).then(res => {
      if (!res?.data?.errors?.length) {
        const { data } = res?.data;
        setPageCount(+res?.headers["x-pagination-page-count"]);
        setTrasferData(data);
      }

    });
  }, [page, rowsPerPage]);

  return (
    <>
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
              trasferData.map((data: any) => (
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
