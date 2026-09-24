import React from "react";

import UserContext  from "./User.Context.js";

const UserContextProvider = ({children}) =>{8
    const [user , setuser] = React.useState(null);
    return (
        <UserContext.Provider value={{user ,setuser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
