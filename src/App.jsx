import { Contries } from "./components/Contries";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="bg-very-light-gray text-very-dark-blue-text min-h-screen font-nunito-sans text-lg dark:bg-very-dark-blue">
      <Header />
      <Contries />
    </main>
  );
}

export default App;
