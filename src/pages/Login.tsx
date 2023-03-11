import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleLoginClick = () => loginWithRedirect();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Login;
