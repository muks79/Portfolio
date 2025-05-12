import { useState } from "react";
import "./App.css";
import Navbar from "./UI/Navbar";
import MobileMenu from "./UI/MobileMenu";
import LoadingScreen from "./UI/LoadingScreen";
function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <>
      <LoadingScreen />
      <Navbar isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
    </>
  );
}
export default App;
