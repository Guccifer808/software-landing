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
      // If the user is not authenticated, redirect to the homepage
      if (!isAuthenticated) {
        navigate("/");
        return;
      }
      navigate("/dashboard");
    };

    // Call the handleRedirectCallback function when the component mounts
    handleRedirectCallback();
  }, [isAuthenticated, getIdTokenClaims, navigate]);
  // Save the current path so we can redirect back to it after login
  const returnTo = location.pathname;

  return (
    <button onClick={() => loginWithRedirect({ appState: { returnTo } })}>
      Login
    </button>
  );
};

export default Login;
