import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propt from "./routes/Propt";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Propt />} />
        <Route path="/login" element={<Contact />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;