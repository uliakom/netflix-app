const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 bg-linear-to-b from-black to-transparent">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Netflix Logo" className="w-20 sm:w-30 md:w-40 h-auto" />
        </div>

        <div className="flex items-center space-x-4">
          <button
            style={{ backgroundColor: "red" }}
            className="bg-red-600 hover:bg-linear-to-b from-red to-transparent text-white font-bold py-1 px-4 rounded transition duration-200"
          >
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
