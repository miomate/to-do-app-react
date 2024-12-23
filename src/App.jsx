import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import tasks from "../tasks.json";
import ItemDetails from "./pages/ItemDetails";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/About" element={<AboutPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
