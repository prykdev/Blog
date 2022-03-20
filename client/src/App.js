import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <>
      <Topbar />
      {/* <Login/> */}
      <Routes>
        {/* <Home /> */}
        {/* <Single/> */}
        {/* <Write/> */}
        {/* <Settings/> */}
        {/* <Register /> */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}


export default App;
