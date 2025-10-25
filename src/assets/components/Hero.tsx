const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-start">
      {/* Фонове зображення на весь екран */}
      <div
        className="absolute top-0 left-0 w-full inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      ></div>

      {/* Темний оверлей для кращої читабельності тексту */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Додаткові градієнти для Netflix-стилю */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent"></div>

      {/* Контент */}
      <div className="relative z-10 w-full px-8 max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-9xl font-bold text-white leading-tight">
          Unlimited movies, TV shows, and more
        </h1>

        <p className="text-gray-300 font-semibold">
          Starts at EUR 4.99. Cancel anytime.
        </p>

        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Форма */}
        <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-4 text-lg bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center space-x-2 whitespace-nowrap">
            Get Started ›
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
