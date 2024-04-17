import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div  className="bg-black dark:bg-zinc-100 transition-all duration-200 h-[100vh] relative overflow-x-hidden">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
