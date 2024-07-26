import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Clubs from "./clubs/Clubs";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>

          {/* home */}
          <Route path="/" element={<Home />} />

          {/* blog */}
          <Route
            path="/blog"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />

          {/* club*/}
          <Route
            path="/club"
            element={authUser ? <Clubs /> : <Navigate to="/signup" />}
          />


          <Route path="/signup" element={<Signup />} />


        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
