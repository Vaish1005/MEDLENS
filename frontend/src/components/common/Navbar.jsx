export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wide">
          MedLens
        </h1>

        <div className="flex items-center gap-8">

          <button className="text-slate-400 hover:text-white transition">
            Features
          </button>

          <button className="text-slate-400 hover:text-white transition">
            About
          </button>

          <button className="px-4 py-2 rounded-lg bg-white text-black font-medium">
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}
const handleLogout = () => {

  localStorage.removeItem(
    "token"
  );

  window.location.href =
    "/login";

};

<button
  onClick={handleLogout}
>
  Logout
</button>