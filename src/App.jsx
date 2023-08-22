import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </main>
  );
}

export default App;
