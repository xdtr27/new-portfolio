import Contato from "../sections/Contato";
import Home from "../sections/Home";
import Projetos from "../sections/Projetos";
import Sobre from "../sections/Sobre";
import ButtonTop from "./ButtonTop";

export default function Main() {
  return (
    <main> 
      <Home />
      <Projetos />
      <Sobre />
      <Contato />
      <ButtonTop />
    </main>
  )
}
