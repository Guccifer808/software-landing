import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

const Login = (props: Props) => {
  const { loginWithRedirect, error } = useAuth0();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  );
};

export default Login;
