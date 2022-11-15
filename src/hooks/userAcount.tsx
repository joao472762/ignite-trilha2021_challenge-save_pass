import { useContext } from "react";
import { UserAcountsContext } from "../context/UserAcountsContext";

export function useUserAcount(){
    const context  = useContext(UserAcountsContext)
    return context
}