import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <HomeBanner />
        <Posts />
        <Footer />

    </div>
  );
}

export default App;
