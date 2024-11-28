import { useAuth } from "@hooks";
import { DASHBOARD_ROUTE } from "@pages";
import { PropsWithChildren, FC } from "react";
import { Navigate } from "react-router-dom";


export const PublicProtection: FC<PropsWithChildren> = ({children}) =>{
    const { token } = useAuth();
    if (token) {
        return <Navigate to={`/${DASHBOARD_ROUTE}`} replace />
    }
    return children
}