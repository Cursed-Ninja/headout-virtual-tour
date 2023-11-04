import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signuppage";
import SignIn from "./pages/Signinpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp /> }/>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
