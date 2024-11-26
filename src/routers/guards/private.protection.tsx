import { useAuth } from "@hooks"
import { HOME_ROUTE } from "@pages/Home";
import { FC, PropsWithChildren } from "react"
import { Navigate } from "react-router-dom";

export const PrivateProtection: FC<PropsWithChildren> = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to={`/${HOME_ROUTE}`} replace/>
  }
  return children

}
