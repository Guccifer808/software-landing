import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

import Homepage from "./pages/Homepage";
import Dashboard from "./components/dashboard";
import Login from "./pages/auth/Login";
import AuthRoute from "./components/AuthRoute";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

//firebase init
initializeApp(config.firebaseConfig);

type Props = {};

const App: FC<Props> = (props) => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
