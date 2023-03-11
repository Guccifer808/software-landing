import { Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Dashboard from "./components/dashboard";
import Login from "./pages/Login";

const onRedirectCallback = (appState: any) => {
  const navigate = useNavigate();

  // If the user is returning to a specific page, navigate to that page
  if (appState && appState.returnTo) {
    return navigate(appState.returnTo);
  }

  // Otherwise, navigate to the dashboard
  return navigate("/dashboard");
};

const auth0Options = {
  domain: "dev-3wfcqahpvqzaetgv.us.auth0.com",
  clientId: "FrRLilRP9KUMA8yfwKMTlpy1e82Ic97D",
  authorizationParams: {
    redirect_uri: window.location.origin + "/callback",
  },
};

function App() {
  return (
    <Auth0Provider {...auth0Options} onRedirectCallback={onRedirectCallback}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
