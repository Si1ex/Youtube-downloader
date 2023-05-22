import React, { useState } from "react";
import Footer from "./Footer";


function App() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const [formatOptionsOpen, setFormatOptionsOpen] = useState(false);
  let serverURL = 'http://localhost:4000';

  async function downloadMp(query) {
    const res = await fetch(`${serverURL}/download?URL=${url}&format=${format}`);
    if (res.status === 200) {
      var a = document.createElement("a");
      a.href = `${serverURL}/download?URL=${url}&format=${format}`;
      a.setAttribute("download", "");
      a.click();
    } else if (res.status === 400) {
      alert("Invalid URL");
    }
  }
  

  const handleConvert = async () => {
    try {
      console.log(`URL: ${url}`);
      await downloadMp(url);
    } catch (error) {
      console.error(error);
      alert("An error occurred while converting the video.");
    }
  };
  

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleFormatChange = (selectedFormat) => {
    setFormat(selectedFormat);
    setFormatOptionsOpen(false);
  };

  return (
    <form>
      <div className="flex flex-col items-center justify-center min-h-screen bg-repeat-space p-10 bg-gradient-to-br from-green-300 via-indigo-300 to-blue-300">
        <h1 className="text-5xl mb-10 font-bold text-white text-center">
          Youtube downloader
        </h1>
        <p className="m-7 text-2xl font-medium text-white">
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
            autoComplete="off"
            className="URL-input w-full text flex p-3 pl-10 py-2.5 px-4 rounded-full shadow-xl outline-none overflow-y-auto scrollbar-thumb-purple-500 text-gray-900 bg-gray-50 focus:border-purple-400 dark:bg-white"
            placeholder="Link"
            value={url}
            onChange={handleInputChange}
          />
          <div className="w-1/3 md:w-1/4 absolute inset-y-0 right-0 z-30 flex items-center pl-3">
            <button
              type="button"
              className="convert-button text-white w-full hover:scale-105 ease-in-out duration-100 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium rounded-full bg-gradient-to-r from-green-300 to-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleConvert}
            >
              Convert
            </button>
          </div>
        </div>
          <div className="relative inline-block text-left mt-5">
            <div>
              <button
                type="button"
                className="dropdown-button inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                data-dropdown-toggle="dropdown"
                onClick={() => setFormatOptionsOpen(!formatOptionsOpen)}
              >
                File Format: {format.toUpperCase()}
                <svg 
                class="w-4 h-4 ml-2" 
                aria-hidden="true" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                  </path>
                </svg>
              </button>
            </div>
            {formatOptionsOpen && (
              <div
                className="dropdown-menu origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  onClick={() => handleFormatChange("mp3")}
                  className={`${
                    format === "mp3" ? "text-gray-900" : "text-gray-700"
                  } group flex items-center px-4 py-2 text-sm`}
                  role="menuitem"
                >
                  MP3
                </button>
                <button
                  onClick={() => handleFormatChange("mp4")}
                  className={`${
                    format === "mp4" ? "text-gray-900" : "text-gray-700"
                  } group flex items-center px-4 py-2 text-sm`}
                  role="menuitem"
                >
                  MP4
                </button>
              </div>
            )}
          </div>

          
        
        <Footer />
      </div>
    </form>
  );
}

export default App;
