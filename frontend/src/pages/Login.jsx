import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthService";

export default function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {


const token = localStorage.getItem("token");

if (token) {
  navigate("/dashboard");
}


}, [navigate]);

const handleLogin = async () => {


try {

  const data = await loginUser(
    email,
    password
  );

  localStorage.setItem(
    "token",
    data.access_token
  );

  navigate("/dashboard");

} catch (error) {

  console.error(error);

  alert("Invalid Credentials");

}


};

return ( <div
   className="
   min-h-screen
   bg-[#0B1120]
   flex
   items-center
   justify-center
   px-6
 "
 > <div
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
   > <div className="mb-8">


      <h1
        className="
        text-4xl
        font-bold
        text-white
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
        Clinical Evidence Intelligence
      </p>

    </div>

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
      onClick={handleLogin}
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
      Sign In
    </button>

    <p
      className="
      text-center
      text-slate-400
      mt-6
    "
    >
      New to MedLens?
    </p>

    <button
      onClick={() => navigate("/register")}
      className="
      w-full
      mt-3
      py-3
      rounded-lg
      border
      border-slate-700
    "
    >
      Create Account
    </button>

  </div>
</div>

);
}
