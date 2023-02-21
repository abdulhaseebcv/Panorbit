import React from 'react'
import { createContext, useState } from "react";


export const UserContext = createContext(null)


function Context({ children }) {
  const [user, setUser] = useState({})
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default Context