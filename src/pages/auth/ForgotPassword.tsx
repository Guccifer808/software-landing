import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import image from "../../assets/images/hero.png";
type Props = {};

const ForgotPassword: FC<Props> = () => {
  const auth = getAuth();
  const [email, setEmail] = useState<string>("");
  const [resetSent, setResetSent] = useState<boolean>(false);

  // Sends a password reset email
  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gray-100 p-5">
      {/* container */}
      <div className="mx-auto flex max-w-3xl items-center rounded-2xl bg-gray-100 p-5 shadow-lg">
        {/* form */}
        <div className="justify-center px-8 md:w-1/2 md:px-16">
          <div className="text-2xl font-bold text-[#002D74]">
            Forgot Password
          </div>
          <p className="mt-4 text-xs text-[#002D74]">
            Enter the email address associated with your account to receive a
            password reset link
          </p>
          {resetSent ? (
            <p className="mt-4 text-sm text-green-500">
              A password reset link has been sent to your email. Please check
              your inbox and spam folder.
            </p>
          ) : (
            <form onSubmit={handleReset} className="flex flex-col gap-4">
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

              <button
                type="submit"
                className="rounded-xl bg-blue-500 py-2 text-white duration-500 hover:scale-105"
              >
                Reset Password
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-[#002D74]">
            Remember your password? <Link to="/login">Log in</Link>
          </p>
        </div>
        {/* image */}
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <img
            src={image}
            alt="forgot-password"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
