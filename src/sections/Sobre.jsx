import { useContext } from "react";
import Divider from "../components/Divider";
import { SizeContext } from "../contexts/SizeContext";

export default function Sobre() {
  const {size} = useContext(SizeContext)
  
  return (
    <>
      <section id="about" className="my-28 px-6 sm:px-10 lg:px-48">
        <h2 className="text-3xl text-zinc-100 dark:text-zinc-800 font-semibold mb-7 text-center lg:text-start">
          Sobre<span className="text-indigo-500 font-bold">.</span>
        </h2>
        {/* <div className={`flex items-center gap-4 ${size < 700? "justify-center":""}`}>
          <TechCard>React</TechCard>
          <TechCard>Tailwind</TechCard>
          <TechCard>Scrum</TechCard>
        </div> */}
        <hr className="mt-2 outline-none bg-zinc-800" />
        <div className={`flex items-start mt-5 gap-5 ${size < 700? "flex-col":""}`}>
          <p className="text-zinc-100 dark:text-zinc-800 w-full text-justify">
            Sou um estudante de Engenharia de Software e estou ansioso para
            contribuir para projetos inovadores e desafiadores. Meu objetivo é
            aplicar minha habilidade de resolução de problemas para entregar
            soluções criativas e de alta qualidade.
          </p>
          <div className="bg-gray-800 dark:bg-zinc-300 rounded-md p-5 w-full min-w-[250px]">
            <h3 className="text-indigo-600 font-semibold">Engenharia de Software</h3>
            <small className="text-zinc-100 dark:text-zinc-800">UNESA | 02.2022 - 01.2026</small>
            <p className="text-zinc-100 dark:text-zinc-800 font-semibold">Em andamento</p>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
