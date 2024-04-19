



export default function Input({ type, placeholder }) {
  
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-900 dark:bg-zinc-300 rounded-md p-3 max-w-[400px] outline-none text-zinc-300 "
    />
  );
}
