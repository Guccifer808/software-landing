import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

type Props = {
  path: string;
};

const PrivateRoute: FC<Props> = ({ path, ...rest }: Props) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Route path={path} element={<Dashboard />} />;
  } else {
    return (
      <Route path={path} element={<Navigate to={{ pathname: "/login" }} />} />
    );
  }
};

export default PrivateRoute;
