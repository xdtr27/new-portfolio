

const TechCard = ({children}) => {
  return (
    <div className="text-black bg-white w-[100px] text-center font-semibold py-1 px-2 rounded-sm hover:text-white cursor-pointer hover:bg-indigo-500 transition-colors duration-150">{children}</div>
  )
}

export default TechCard