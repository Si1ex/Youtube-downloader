import './App.css';
import sendUrl from "./Script.js";

function App() {
  return (
    <form>
      <div className="flex flex-col items-center justify-center min-h-screen bg-repeat-space p-10 bg-gradient-to-br from-green-300 via-indigo-300 to-blue-300">
        <h1 className="text-5xl font-bold text-white text-center ">
          Youtube downloader
        </h1>
        <h1 className="text-4xl font-bold text-white text-center ">
          Welcome
        </h1>
        <p className="mt-4 text-2xl font-medium text-white mb-7">
          Input link:
        </p>
        <div className="w-full md:w-1/2 lg:w-1/3 relative flex bg-transparent items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500  dark:text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="IP"
            class="URL-input"
            autoComplete="off"
            className={`w-full text flex p-3 pl-10 py-2.5 px-4 rounded-full shadow-xl outline-none overflow-y-auto scrollbar-thumb-purple-500 text-gray-900 bg-gray-50 focus:border-purple-400 dark:bg-white`}
            placeholder="Link"
          />
          <div className="w-1/3 md:w-1/4 absolute inset-y-0 right-0 z-30 flex items-center pl-3">
            <button
              class="convert-button"
              type="submit"
              onClick={sendUrl}
              data-testid="search-button"
              className="text-white w-full hover:scale-105 ease-in-out duration-100 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium rounded-full bg-gradient-to-r from-pink-300 to-purple-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Convert
            </button>
          </div>
          
        </div>
      </div>
    </form>
  );
}

export default App;
