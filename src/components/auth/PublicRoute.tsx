import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

import { RootState } from "../../store";

interface Props {
  component: React.ComponentType<any>;
  path: string;
  [propName: string]: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          <Component />
        ) : (
          <Navigate to="/dashboard" replace={true} />
        )
      }
      index={rest.path === "/"}
    />
  );
};

export default PublicRoute;
