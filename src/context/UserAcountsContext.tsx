import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useEffect, useState } from "react"

export interface UserAccountProps {
    id: string,
    serviceName: string,
    password: string,
    profile: string,
}

interface UserAccountsContextProviderProps {
    children: ReactNode,
    
}

interface UserAccountsContextType {
    userAccounts: UserAccountProps[],
    addNewAccount: (newAccount: UserAccountProps ) => Promise<void>
}

export const UserAcountsContext = createContext({} as UserAccountsContextType)



export function UserAcountsContextProvider({children}: UserAccountsContextProviderProps){
    const [userAccounts, setUserAccounts] = useState<UserAccountProps[]>([])
    const dataKey = '@savePass/userAccounts'

    async function fetchUserAcounts() {
        try {
            const storage = await AsyncStorage.getItem(dataKey)
            if(storage){
                const userAcountsInStorage = JSON.parse(storage)
                setUserAccounts(userAcountsInStorage)
            }
        } catch (error) {
            
        }
    }

    async function  addNewAccount(newAccount: UserAccountProps){
        const userAccountsWithMoreOneAccount = [newAccount, ...userAccounts]


        try {
            const userAccountsToStorage = JSON.stringify(userAccountsWithMoreOneAccount)
            await AsyncStorage.setItem(dataKey, userAccountsToStorage)
            setUserAccounts(userAccountsWithMoreOneAccount)

        } catch (error) {
            console.error(error)
            throw Error(error)
        }

    }

    useEffect(() => {
        fetchUserAcounts()
    }, [])
    
    return (
        <UserAcountsContext.Provider value={{userAccounts,addNewAccount}}>
            {children}
        </UserAcountsContext.Provider>
    )
}