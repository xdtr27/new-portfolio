import Button from "../components/Button";
import Divider from "../components/Divider";
export default function Home() {
  
  
  
  
  return (
    <>
      <section id="home" className=" flex flex-col relative gap-6 text-zinc-100 dark:text-zinc-800 my-32 px-6 sm:px-10 md:px-48 text-center lg:text-start">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold md:6xl">Alexandre de Souza</h1>
          <small className="text-indigo-400 text-xl font-semibold">
            Desenvolvedor Front-End
          </small>
        </div>
        <div>
          <p className="text-[1.1rem]">
            Transformando ideias abstratas em experiências <br /> visuais
            incríveis,
            <strong className="text-indigo-400"> código a código</strong>.
          </p>
          <Button className="mt-3 text-zinc-100">Baixar currículo</Button>
        </div>
        <div>
          <h2 className="absolute translate-y-[-50px] left-[-5%] text-[80px] sm:text-[100px] opacity-5 font-sans leading-none">
            HELLO <br /> WORLD
          </h2>
        </div>
      </section>
      <Divider />
    </>
  );
}
