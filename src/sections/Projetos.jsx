import { useContext } from "react";
import { SizeContext } from "../contexts/SizeContext";
import Divider from "../components/Divider";

const projetos1 = [
  {
    id: 1,
    name: "Projeto 1",
    big: true,
  },
  {
    id: 2,
    name: "Projeto 2",
    big: false,
  },
];

const projetos2 = [
  {
    id: 3,
    name: "Projeto 3",
    big: false,
  },
  {
    id: 4,
    name: "Projeto 4",
    big: true,
  },
];

export default function Projetos() {
  const { size } = useContext(SizeContext);

  return (
    <>
      <section id="projects" className="my-28 px-6 sm:px-10 lg:px-48">
        <h2 className="text-3xl text-zinc-100 dark:text-zinc-800 font-semibold mb-14 text-center lg:text-start">
          Projetos<span className="text-indigo-500 font-bold">.</span>
        </h2>
        <div className="flex gap-4  flex-wrap justify-center lg:justify-start">
          <ul className="flex flex-col gap-4 w-full sm:w-[300px]">
            {projetos1.map((projeto) => {
              return (
                <li
                  key={projeto.id}
                  className={`flex items-center justify-center text-zinc-600 bg-gray-900 dark:bg-zinc-300 md:w-[300px] rounded-md ${
                    projeto.big && size > 700 ? "h-60" : "h-48"
                  }`}
                >
                  {projeto.name}
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-4 w-full sm:w-[300px]">
            {projetos2.map((projeto) => {
              return (
                <li
                  key={projeto.id}
                  className={`flex items-center justify-center text-zinc-600 bg-gray-900 dark:bg-zinc-300 md:w-[300px] rounded-md ${
                    projeto.big && size > 700 ? "h-60" : "h-48"
                  }`}
                >
                  {projeto.name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Divider />
    </>
  );
}
