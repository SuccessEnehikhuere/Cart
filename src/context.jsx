import { useReducer, useEffect, useContext, createContext, Children} from "react"
import cartItems from "./data"

const AppContext = createContext();


const defaultState = {
  isLoading: false,
  state: new Map(cartItems.map((item) => [item.id, item]))
}

const reducer = (state, action)=>{

}

export const AppProvider = ({children})=>{
  const [state, dispatch] = useReducer(reducer, defaultState)

  return(
   <AppContext.Provider>
      {children}
   </AppContext.Provider>
  )

}




export const useGlobalContext = ()=>{
  return useContext(AppContext)
}