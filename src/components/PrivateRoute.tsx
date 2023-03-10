import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
type Props = {
  render?: ((props: Props) => React.ReactNode) | undefined;
  props?: any;
  path: string;
  element: any;
};

const PrivateRoute: FC<Props> = ({ element: Dashboard, ...rest }: Props) => {
  const isAuthenticated = true; // replace with actual authentication logic
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Dashboard />
        ) : (
          <Navigate to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
