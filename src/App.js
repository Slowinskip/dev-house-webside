import "./App.css";
import Banner from "./components/common/Banner/Banner";
import { Home } from "./components/layout/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner title="Design your home with us!" />
      <Home />
    </>
  );
}

export default App;
