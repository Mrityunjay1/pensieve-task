import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api/:id" element={<Details />} />
        </Routes>
      </Router>
      <ToastContainer />

      {/* <Login /> */}
    </>
  );
}

export default App;
