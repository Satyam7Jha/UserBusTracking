import React, { createContext, useState } from 'react';
const GlobalContext = createContext();


const GlobalData = props => {

    // ----------------------------------------------------------------------------------------------------

    // Variables for UserData.
    const [status, setStatus] = useState(true)

    // ----------------------------------------------------------------------------------------------------














    return (

        <GlobalContext.Provider value={{
            status, setStatus


        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export { GlobalData, GlobalContext };