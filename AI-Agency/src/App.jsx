const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Hello, Jeiv! 👋</h1>

        <p className="text-gray-300 mb-6">
          This is my first React + Tailwind CSS website.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
