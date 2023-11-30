import { Contries } from "./components/Contries";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="bg-very-light-gray h-screen font-nunito-sans text-lg">
      <Header />
      <Contries />
    </main>
  );
}

export default App;
