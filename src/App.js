// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/user/Home/Home";
import RegisterForm from "./components/user/auth/RegisterForm";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/user/Cart/Cart";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile/>} />
          <Route path='cart' element={<Cart/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
