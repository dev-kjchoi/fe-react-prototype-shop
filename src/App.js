import AppStateProvider from "./providers/AppStateProvider";
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
