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
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  // path: string;
  // element: React.ReactNode;
};
// redirectUri: window.location.origin,

//software-landing-one.vercel.app/dashboard?code=wq4J1c8F2H81jP3DJiXvs7DIC49tmAljY9oWEzktfjVpT&state=LVlQLkowTW0tUkNHRG5IM29pdV96THFVTm9mUEVENTRHb1dyUHJLNHloMw%3D%3D

const auth0Options = {
  domain: "dev-3wfcqahpvqzaetgv.us.auth0.com",
  clientId: "FrRLilRP9KUMA8yfwKMTlpy1e82Ic97D",
  authorizationParams: {
    redirect_uri: window.location.origin + "/dashboard",
  },
};
const navigate = useNavigate();
const onRedirectCallback = (appState: any, navigate: any) => {
  // If the user is returning to a specific page, navigate to that page
  if (appState && appState.returnTo) {
    return navigate(appState.returnTo);
  }

  // Otherwise, navigate to the dashboard
  return navigate("/dashboard");
};
function App({ setSelectedPage }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLoading, isAuthenticated: auth0IsAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (auth0IsAuthenticated) {
    setIsAuthenticated(true);
  }
  return (
    <Auth0Provider
      {...auth0Options}
      onRedirectCallback={(appState) => onRedirectCallback(appState, navigate)}
    >
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={<Homepage setSelectedPage={setSelectedPage} />}
            />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/callback" element={<Dashboard />} /> */}
            {isAuthenticated && (
              <Route path="/dashboard" element={<Dashboard />} />
            )}
            {/* Redirect to login if not authenticated */}
            {!isAuthenticated && <Navigate to="/" />}
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
