import { useState } from "react"
import { createContext } from "react"

export const Visible = createContext()
export function VisibleProvider({ children }) {
    const [position, setposition] = useState(false)
    return (
        <Visible.Provider value={{position,setposition}}>
            {children}
        </Visible.Provider>
    )

}


