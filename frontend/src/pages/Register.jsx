import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/AuthService";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await registerUser(
        username,

        email,

        password,
      );

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert("Registration Failed");
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#0B1120]
      flex
      items-center
      justify-center
      px-6
    "
    >
      <div
        className="
        w-full
        max-w-md
        border
        border-slate-800
        rounded-2xl
        p-8
        bg-slate-900/60
        backdrop-blur-md
        shadow-2xl
      "
      >
        <div className="mb-8">
          <h1
            className="
            text-4xl
            font-bold
          "
          >
            MedLens
          </h1>

          <p
            className="
            text-slate-400
            mt-2
          "
          >
            Create your account
          </p>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
          w-full
          p-3
          rounded-lg
          bg-slate-950
          border
          border-slate-700
          mb-4
        "
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
          w-full
          p-3
          rounded-lg
          bg-slate-950
          border
          border-slate-700
          mb-4
        "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
          w-full
          p-3
          rounded-lg
          bg-slate-950
          border
          border-slate-700
          mb-6
        "
        />

        <button
          onClick={handleRegister}
          className="
          w-full
          py-3
          rounded-lg
          bg-cyan-500
          hover:bg-cyan-400
          transition
          font-semibold
        "
        >
          Create Account
        </button>

        <p
          className="
          text-center
          text-slate-400
          mt-6
        "
        >
          Already have an account?
        </p>

        <button
          onClick={() => navigate("/login")}
          className="
          w-full
          mt-3
          py-3
          rounded-lg
          border
          border-slate-700
        "
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
