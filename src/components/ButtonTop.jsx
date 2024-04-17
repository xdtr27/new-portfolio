import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";


export default function ButtonTop() {
  const [top, setTop] = useState(window.scrollY)
  
  function click() {
    setTop(window.scrollY)
  }

  console.log(top)
  
  return (
    <button onClick={click} className="bg-indigo-500 text-zinc-300 font-bold fixed bottom-10 right-4 md:right-8 p-4 rounded-full">
      <FaArrowUp />
    </button>

  )
}