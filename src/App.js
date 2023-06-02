import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Main from "./components/Main";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account"
import MovieHome from "./pages/MovieHome";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
    <AuthContextProvider>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="Auth" element={<Auth/>}/>
      <Route path="Signup" element={<SignUp/>}/>
      <Route path="mHome" element={<ProtectedRoute><MovieHome/></ProtectedRoute>}/>
      <Route path="account" element= {<ProtectedRoute><Account/></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
