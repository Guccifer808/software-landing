import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthError,
  User,
} from "firebase/auth";
import image from "../../assets/images/hero.png";

type Props = { onSuccess?: () => void; onError?: (error: AuthError) => void };

const Register: FC<Props> = ({ onSuccess, onError }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  // Email & Password registration
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setRegistering(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
    } catch (error: unknown) {
      console.error(error);
      if (onError && isAuthError(error)) {
        onError(error);
      }
    } finally {
      setRegistering(false);
    }
  };

  // Typeguard to check if the error is an instance of AuthError before calling onError
  function isAuthError(error: unknown): error is AuthError {
    return (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof (error as { code: unknown }).code === "string" &&
      "message" in error &&
      typeof (error as { message: unknown }).message === "string"
    );
  }

  // navigate after successful registration
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
      if (onSuccess) onSuccess();
    } else {
      navigate("/register");
    }
  }, [user]);

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gray-100 p-5">
      {/* container */}
      <div className="mx-auto flex max-w-3xl items-center rounded-2xl bg-gray-100 p-5 shadow-lg">
        {/* form */}
        <div className="justify-center px-8 md:w-1/2 md:px-16">
          <div className="text-2xl font-bold text-[#002D74]">Register</div>
          <p className="mt-4 text-xs text-[#002D74]">
            Register for a new account
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mt-8 rounded-xl border p-2"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl p-2"
              required
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-500 py-2 text-white duration-500 hover:scale-105"
              disabled={registering}
            >
              {registering ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="mt-4 text-xs text-[#002D74]">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        {/* image */}
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <img
            src={image}
            alt="register"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
