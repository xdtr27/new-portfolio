import { twMerge } from "tailwind-merge";

const Button = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "relative z-10 bg-indigo-600 px-4 py-2 mt-3 rounded-sm font-semibold cursor-pointer hover:bg-indigo-700 transition-colors",
        className
      )}
    >
      <a href="#">{children}</a>
    </button>
  );
};

export default Button;
