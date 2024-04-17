import { createContext, useState } from "react";

export const SizeContext = createContext();


export const SizeProvider = ({children}) => {
  const [size, setSize] = useState(window.innerWidth);

  function handleSize() {
    setSize(window.innerWidth);
  }
  
  return (
    <SizeContext.Provider value={{size, handleSize}}>{children}</SizeContext.Provider>
  )
}