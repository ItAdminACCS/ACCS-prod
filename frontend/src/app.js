import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import "./app.css";
import BlogPage from "./pages/BlogPage/BlogPage.js";
import AddArticle from "./pages/AddArticle/AddArticle.js";
import { UserProvider } from './context/UserContext';
import LoginPage from "./pages/LoginPage/LoginPage.js";
import TeamPage from "./pages/TeamPage/TeamPage.js";
import GettingHelp from "./pages/GettingHelp/GettingHelp.js";

function App() {
  return (
    <UserProvider>
    <Router>
       <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/getting-help" element={<GettingHelp />} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;