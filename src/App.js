import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";
import PostDescription from "./components/PostDescription/PostDescription";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/postdescription" element={<PostDescription />} />
        </Routes>
        <HomeBanner />
        <Posts />
        <Footer />

    </div>
  );
}

export default App;
