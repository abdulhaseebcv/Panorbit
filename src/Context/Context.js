import React from 'react'
import { createContext, useState } from "react";


export const UserContext = createContext(null)
export const ToggleContext = createContext(null)


function Context({ children }) {
  const [user, setUser] = useState({})
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ToggleContext.Provider value={{ toggle, setToggle }}>
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      </ToggleContext.Provider>
    </div>
  )
}

export default Context