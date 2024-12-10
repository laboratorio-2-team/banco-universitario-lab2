import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "styled-components";
import { getBalanceApi, whoImIApi } from "../../../services/modules/user";
import v14 from '@assets/v14.svg'

interface BalanceData {
  balance: number;
}

interface ResponseWhoImI {
  account_number: string;
  first_name: string;
  last_name: string;
}

export const Dashboard = () => {
  const theme = useTheme();
  const [user, setUser] = useState<ResponseWhoImI>({
    account_number: "",
    first_name: "",
    last_name: "",
  });
  const [balanceData, setBalanceData] = useState<BalanceData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formatAccountNumber = (account: string) => {
    if (!account) return "";
    else if (account.length < 20) return account;
    return `${account.substring(0, 4)} **** **** **** ${account.substring(16)}`;
  };

  const formatName = (first_name: string, last_name: string) => {
    if (!first_name) return "";
    return `${first_name + " " + last_name}`;
  };

  useEffect(() => {
    whoImIApi()
      .then((res) => {
        if (res && !res.errors?.length) {
          const { data } = res;
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la información del usuario:", error);
      });
    getBalanceApi()
      .then((res) => {
        if (res && !res?.errors?.length) {
          const { data } = res;
          setBalanceData(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el balance:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Saludo */}
      <Typography
        className="!mb-4"
        fontFamily={theme.typography.fontFamily}
        fontSize="2rem"
      >
        Hola,{" "}
        {user ? formatName(user.first_name, user.last_name) : "Cargando..."}
      </Typography>

      {/* Sección de cuentas */}
      <Typography
        className="!mb-4 !font-bold !text-lg"
        fontFamily={theme.typography.fontFamily}
      >
        Mis Cuentas
      </Typography>

      {errorMessage ? (
        <Typography className="!text-red-500">{errorMessage}</Typography>
      ) : (
        <Card
          className="!w-2/3 !rounded-lg !shadow-md !flex !items-center !px-6"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <CardContent className="!flex !flex-row !w-full !justify-between">
            {/* Información de cuenta */}
            <div className="flex items-center">
              <div className="mr-4">
                {/* Ícono */}
                <img src={v14} />
              </div>
              <div>
                <Typography className="!font-bold">Cuenta Bancaria</Typography>
                <Typography className="!text-[#053436] !text-sm">
                  {balanceData
                    ? formatAccountNumber(user.account_number)
                    : "Cargando..."}
                </Typography>
              </div>
            </div>
            {/* Saldo */}
            <div className="flex flex-col items-end">
              <Typography className="!text-[#053436] !text-sm">
                Saldo Disponible
              </Typography>
              <Typography className="!text-[#053436] !font-bold !text-lg">
                {balanceData ? `${balanceData.balance} BS` : "Cargando..."}
              </Typography>
            </div>
          </CardContent>
          {/* Opciones */}
          <CardActions>
            <Button>
              <MoreVertIcon className="!text-[#053436]" />
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};
