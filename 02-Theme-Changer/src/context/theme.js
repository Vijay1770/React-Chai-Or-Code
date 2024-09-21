  import { createContext, useContext } from "react";
  
  export const ThemeContext=createContext({
    themeMode:"light",
    
    darkTheme:()=>{},
    lightTheme:()=>{},
  })

  export const ThemeProvider = ThemeContext.Provider

  // Below is the custom(userCreated) hook... 
    export default function useTheme(){
      return useContext(ThemeContext)
    }
  