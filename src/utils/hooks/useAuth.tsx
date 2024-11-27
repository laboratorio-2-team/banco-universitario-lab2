import { useState } from "react"
import { getJWT, removeJWT, setJWT } from "../localStorage"

export const useAuth = () => {
    const [token] = useState(getJWT() || '');



    const closeSession = () => {

        if (token === '') {
            return false;
        }
        removeJWT();
        return true;
    }

    const setToken = (jwtToken: string) => {
        setJWT(jwtToken)
    }

    return {
        token,
        closeSession,
        setToken
    }

}
