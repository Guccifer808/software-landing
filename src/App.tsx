import { useEffect, useState } from "react";
import Hero from "./components/home";
import Navbar from "./components/navbar";
import Features from "./components/features";
import { SelectedPage } from "./shared/types";
import About from "./components/about";
import Services from "./components/services";
import Faq from "./components/faq";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  // path: string;
  // element: React.ReactNode;
};

const auth0Options = {
  domain: "dev-3wfcqahpvqzaetgv.us.auth0.com",
  clientId: "FrRLilRP9KUMA8yfwKMTlpy1e82Ic97D",
  // redirectUri: window.location.origin,
  redirectUri: "https://software-landing-one.vercel.app/dashboard",
};
function App({ setSelectedPage }: Props) {
  return (
    <Auth0Provider {...auth0Options}>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={<Homepage setSelectedPage={setSelectedPage} />}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute path="/dashboard" element={<Dashboard />} />
              }
            />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;

{
  /* <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Faq setSelectedPage={setSelectedPage} />
      <Contacts setSelectedPage={setSelectedPage} />
      <Footer /> */
}
{
  /* <Homepage setSelectedPage={setSelectedPage} /> */
}
