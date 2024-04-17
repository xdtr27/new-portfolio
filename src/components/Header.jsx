import { useContext, useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { SizeContext } from "../contexts/SizeContext";


export default function Header() {
  /// resize header
  const {size, handleSize} = useContext(SizeContext);

  
  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

  /// voltar na sessão acima. tentar sumir com essa lógica daqui criando meu próprio hook

  // click button menu
  const [menu, setMenu] = useState(false);

  function clickMenu() {
    menu === false ? setMenu(true): setMenu(false);
    document.querySelector('body').classList.toggle('lock')
  }

  function handleTheme() {
    document.querySelector('html').classList.toggle('dark')
 
  }



  return (
    <header className="flex items-center justify-between py-6 px-6 sm:px-10 md:px-18 ">
      <div id="logo">
        <a href="#logo" className="text-zinc-100 dark:text-zinc-800 text-3xl font-semibold">
          xandev<span className="font-bold text-indigo-500">.</span>
        </a>
      </div>

      {size < 1000 ? (
        <div id="nav-mobile">
          <nav
            className={`flex absolute top-0 right-0 w-[50%] transition-all duration-150 z-20  ${
              menu === true ? " translate-x-0 opacity-100" : "translate-x-[1000px] opacity-0"
            }`}
          >
            <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md h-[100vh] top-0 right-0 w-[100%] absolute"></div>
            <ul onClick={clickMenu} className="relative mt-24 text-zinc-100 dark:text-zinc-800 ml-7 flex flex-col z-10 gap-2 font-semibold text-xl">
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div onClick={() => handleTheme()}>
              <MdLightMode  className="text-zinc-100 dark:text-zinc-400 text-2xl hover:brightness-75 transition-all cursor-pointer" />
            </div>
            <div
              onClick={() => clickMenu()}
              className={`flex flex-col gap-1 z-20  ${
                menu === true ? "translate-y-[2px]" : ""
              }`}
            >
              <div
                id="bar-1"
                className={`w-6 h-[1px] bg-zinc-100 dark:bg-zinc-500  transition-all duration-200 ${
                  menu === true ? "rotate-45" : ""
                }`}
              ></div>
              <div
                id="bar-2"
                className={`w-6 h-[1px] bg-zinc-100 transition-all dark:bg-zinc-500 duration-200 ${
                  menu === true ? "-rotate-45 translate-y-[-4.8px]" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div id="nav-desktop">
          <nav className="flex items-center gap-20">
            <ul className="items-center gap-6 text-md hidden md:flex">
              <li>
                <a
                  href="#"
                  className="text-zinc-100 dark:text-zinc-700 dark:hover:text-indigo-500 hover:text-indigo-300 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-100 dark:text-zinc-700 dark:hover:text-indigo-500 hover:text-indigo-300 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-100 dark:text-zinc-700 dark:hover:text-indigo-500  hover:text-indigo-300 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
            <div onClick={() => handleTheme()}>
              <MdLightMode className="text-zinc-100 dark:text-zinc-400  text-2xl hover:brightness-75 transition-all cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
