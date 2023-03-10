import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();

  // Save the current path so we can redirect back to it after login
  const returnTo = location.pathname;

  return (
    <button onClick={() => loginWithRedirect({ appState: { returnTo } })}>
      Login
    </button>
  );
};

export default Login;
