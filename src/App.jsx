function App() {
  return (
    <>
      <nav className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Tailwind Test</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
          </ul>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Responsive Tailwind Works!
        </h2>
        <p className="text-lg mb-4">All utilities loaded correctly.</p>
        <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-md shadow">
          Hover Me
        </button>
      </div>
    </>
  );
}

export default App;
