import { FC, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {
  children: any;
};

const AuthRoute: FC<Props> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
    return () => AuthCheck(); //fixing possible memory leak?
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("Unauthorized user");
      navigate("/login");
    }
  });

  if (loading) return <p>Loading...</p>;
  return <>{children}</>;
};
export default AuthRoute;
