import * as React from "react";
import './App.css';
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PostDescription from "./components/PostDescription/PostDescription";
import Home from "./components/Home/Home";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/postdescription/:id' element={ <PostDescription /> } />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
