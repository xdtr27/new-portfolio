import { useContext, useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { Link } from "react-scroll";
import { SizeContext } from "../contexts/SizeContext";

const sections = [
  {
    key: 1,
    id: "projects",
    name: "Projetos",
  },
  {
    key: 2,
    id: "about",
    name: "Sobre",
  },
  {
    key: 3,
    id: "contact",
    name: "Contato",
  },
];

export default function Header() {
  /// resize header
  const { size, handleSize } = useContext(SizeContext);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

  /// voltar na sessão acima. tentar sumir com essa lógica daqui criando meu próprio hook

  // click button menu
  const [menu, setMenu] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const body = document.querySelector('body')

  function clickMenu() {
    !menu ? setMenu(true) : setMenu(false);

    body.classList.toggle('lock')
  }

  function handleTheme() {
    document.querySelector("html").classList.toggle("dark");
    isDark ? setIsDark(false) : setIsDark(true);
  }

  return (
    <header className="flex items-center justify-between py-6 px-6 sm:px-10 md:px-18 ">
      <div id="logo">
        <a
          href="#logo"
          className="text-zinc-100 dark:text-zinc-800 text-3xl font-semibold"
        >
          xandev<span className="font-bold text-indigo-500">.</span>
        </a>
      </div>

      {size < 1000 ? (
        <div id="nav-mobile">
          <nav
            className={`flex absolute top-0 right-0 w-[50%] transition-all duration-150 z-20  ${
              menu === true
                ? " translate-x-0 opacity-100"
                : "translate-x-[1000px] opacity-0"
            }`}
          >
            <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md h-[100vh] top-0 right-0 w-[100%] absolute"></div>
            <ul
              onClick={clickMenu}
              className="relative mt-24 text-zinc-100 dark:text-zinc-800 ml-7 flex flex-col z-10 gap-2 font-semibold text-xl"
            >
              {sections.map((section) => {
                return (
                  <li key={section.key}>
                    <Link
                      onClick={clickMenu}
                      to={section.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className="text-zinc-100 dark:text-zinc-800 capitalize hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                    >
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div
              onClick={() => handleTheme()}
              className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 dark:bg-zinc-400 rounded-full cursor-pointer flex justify-center items-center transition-all duration-200"
            >
              <IoMoon
                className={`text-white transition-all duration-500 ${
                  isDark ? "scale-0 absolute" : "rotate-[360deg] scale-100"
                }`}
              />

              <MdLightMode
                className={`text-white text-lg transition-all duration-500 ${
                  !isDark ? "rotate-180 scale-0 absolute" : ""
                }`}
              />
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
              {sections.map((section) => {
                return (
                  <li key={section.key}>
                    <Link
                      to={section.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className="text-zinc-100 dark:text-zinc-800 capitalize hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                    >
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div
              onClick={() => handleTheme()}
              className="w-10 h-10 bg-zinc-900 dark:bg-zinc-400 rounded-full cursor-pointer flex justify-center items-center transition-all duration-200"
            >
              <IoMoon
                className={`text-white transition-all duration-500 ${
                  isDark ? "scale-0 absolute" : "rotate-[360deg] scale-100"
                }`}
              />

              <MdLightMode
                className={`text-white text-lg transition-all duration-500 ${
                  !isDark ? "rotate-180 scale-0 absolute" : ""
                }`}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
