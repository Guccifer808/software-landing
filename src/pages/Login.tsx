import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirectCallback = async () => {
      // If the user is not authenticated, return
      if (!isAuthenticated) {
        return;
      }

      // Get the returnTo path from localStorage
      const returnTo = localStorage.getItem("returnTo") || "/dashboard";

      // Clear the returnTo path from localStorage
      localStorage.removeItem("returnTo");

      // Redirect to the returnTo path
      navigate(returnTo);
    };

    // Call the handleRedirectCallback function when the component mounts
    handleRedirectCallback();
  }, [isAuthenticated, getIdTokenClaims, navigate]);

  // Save the current path so we can redirect back to it after login
  const returnTo = location.pathname;

  const handleLogin = () => {
    // Save the returnTo path to localStorage
    localStorage.setItem("returnTo", returnTo);

    // Redirect to the login page
    loginWithRedirect();
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
