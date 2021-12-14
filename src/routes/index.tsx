import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "../views/SignIn/signin";
import { SignUp } from "../views/SignUp/signup";
import { Dashboard } from "../views/Dashbord/dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
        <Route path="*" element={<h1>NOT FOUND 404</h1>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}
