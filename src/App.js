import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movielist from "./pages/Movielist";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies/:type" element={<Movielist />}></Route>
        <Route path="*" element={<p>error</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
