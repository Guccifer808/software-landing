import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

const Login = (props: Props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  );
};

export default Login;
