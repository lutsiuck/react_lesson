import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Header from './components/Header/Header';
import MyPosts from './pages/Profile/MyPosts';
import NewPostContainer from "./pages/Profile/NewPostContainer";
import HomeContainer from "./pages/Home/HomeContainer";


function App() {
  return (
    <div className="container main">
        <Header />
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/new-post">
          <NewPostContainer />
        </Route>
        <Route path="/my-posts">
          <MyPosts />
        </Route>
        <Footer />
    </div>
  );
}

export default App;
