// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

//import Post from "./components/Post";

// import Rodape from "./components/Rodape";
// import Blog from "./components/Blog";
// import Mensagem from "./components/Mensagem";
// import Navbar from "./components/Navbar";
// import CardAluno from "./components/CardAluno";
// import CardProduto from "./components/CardProduto";
// import Listagem from "./components/Listagem";
//import CalculadoraIMC from "./components/CalculadoraIMC";
//import Carrossel from "./components/Carrossel";
import ConversorTemperatura from "./ConversorTemperatura";

// Componente principal da aplicação
function App() {
  return (
    <>
         <section className="App">
      <ConversorTemperatura />
    </section>
    </>
  );
}

export default App;