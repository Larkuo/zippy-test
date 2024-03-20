import React, {createContext, useState} from "react";

interface UserDetailsType{
    email: string;
    name: string;
    apssword: string;
}

interface UserContextInterface{
    isAuthenticated: boolean;
    changeAuthentication: (authenticated: boolean) => void;
    userDetails: UserDetailsType;
    changeUserDetails: (userDetails: UserDetailsType) => void;
}

export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

export function UserContextProvider({children}:{children: React.ReactNode}){
    const [userDetails, setUserDetails] = useState<UserDetailsType>({} as UserDetailsType);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function changeUserDetails(newDetails: UserDetailsType){
        setUserDetails(newDetails);
    }

    function changeAuthentication(authenticated: boolean){
        setIsAuthenticated(authenticated);
    }

    return(
        <UserContext.Provider value={{
            isAuthenticated, 
            changeAuthentication,
            userDetails, 
            changeUserDetails,
        }}>
            {children}
        </UserContext.Provider>
    );
}