import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import EmployeeAdd from "./components/AddEmployee/EmployeeAdd";
import { Route, Routes } from "react-router-dom";
import ListEmployee from "./components/ListEmployee/ListEmployee";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <Navbar />
      <div className="app">
      <ToastContainer/>
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmployeeAdd />} />
          <Route path="/list" element={<ListEmployee />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
