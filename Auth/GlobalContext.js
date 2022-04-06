import React, { createContext, useState } from 'react'
const GlobalContext = createContext()

const GlobalData = (props) => {
  // ----------------------------------------------------------------------------------------------------

  // Variables for UserData.
  const [status, setStatus] = useState(false)
  const [ttoken, setttoken] = useState('NOt update')

  // ----------------------------------------------------------------------------------------------------

  return (
    <GlobalContext.Provider
      value={{
        status,
        setStatus,
        ttoken,
        setttoken,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalData, GlobalContext }
