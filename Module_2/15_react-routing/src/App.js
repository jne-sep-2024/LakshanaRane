import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home';
import Courses from "./Pages/Courses";
import Search from './components/Search';
import List from './components/List'; // Ensure List.js is the correct file
// import UserProfile from "./components/Userprofile";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </nav>

        <Routes>
          {/* 1) Home */}
          <Route path="/" element={<Home />} />

          {/* 2) Courses */}
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} /> {/* Ensure List is imported correctly */}
            {/* <Route path="user/:userId" element ={<UserProfile/>}/> */}
          </Route>
          {/* ------- */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
