import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books"
import AddBooks from "./pages/AddBooks";
import ViewBooks from "./pages/ViewBooks";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/books" element={<Books />}/>
          <Route exact path="/addBooks" element={<AddBooks />}/>
          <Route exact path="/viewBooks" element={<ViewBooks />}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
