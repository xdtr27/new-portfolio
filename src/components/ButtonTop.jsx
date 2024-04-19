import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function ButtonTop() {
  return (
    <button>
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-300}
        className="bg-indigo-600 text-zinc-300 font-bold fixed bottom-10 right-4 md:right-8 p-4 rounded-full outline-none"
      >
        <FaArrowUp />
      </Link>
    </button>
  );
}
