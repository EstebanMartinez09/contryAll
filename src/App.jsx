import { Contries } from "./components/Contries";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="bg-very-light-gray text-very-dark-blue-text h-screen font-nunito-sans text-lg">
      <Header />
      <Contries />
    </main>
  );
}

export default App;
