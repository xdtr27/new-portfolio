import Input from "../components/Input";
import Button from "../components/Button";
import { useContext } from "react";
import { SizeContext } from "../contexts/SizeContext";


const Contato = () => {
  const { size } = useContext(SizeContext);
  

  return (
    <section
      id="contact"
      className={`flex flex-col my-28 px-6 sm:px-10 lg:px-48 ${
        size < 1050 ? "items-center" : ""
      }`}
    >
      <h2 className="text-3xl text-zinc-100 dark:text-zinc-800 font-semibold mb-14 text-center lg:text-start">
        Contate-me<span className="text-indigo-500 font-bold">.</span>
      </h2>
      <form className="flex flex-col gap-4">
        <Input type={"text"} placeholder={"Nome"} />
        <Input type={"email"} placeholder={"E-mail"} />
        <textarea className="max-w-[400px] h-40 p-3 rounded-md bg-gray-900 dark:bg-zinc-300 resize-none outline-none text-zinc-300"  placeholder="Mensagem" cols="30" rows="10"></textarea>
        <Button className="text-zinc-100 rounded-sm w-[200px]">Enviar mensagem</Button>
      </form>
      
    </section>
  );
};

export default Contato;
