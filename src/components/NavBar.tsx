import { FC, useState } from "react";
import Dialog from "./Dialog";

interface NavBarProps {
  isDark: boolean;
  themeClasses: {
    nav: string;
    logo: string;
    button: string;
  };
  setTheme: (theme: string) => void;
}

const NavBar: FC<NavBarProps> = ({ isDark, themeClasses, setTheme }) => {
  const [apiKey, setApiKey] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  return (
    <nav
      className={`${themeClasses.nav} border-b transition-colors duration-200`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div
          className={`text-3xl font-black tracking-widest transition-all duration-300 ${themeClasses.logo} cursor-pointer px-4 py-2`}
        >
          RokkiAi
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center ${themeClasses.button} rounded-lg p-2 cursor-pointer`}
              onClick={() => setShowDialog(true)}
            >
              <svg
                className={`w-5 h-5 ${
                  isDark ? "text-white" : "text-gray-800"
                } transition-colors duration-200`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6465 4.4708 4.4708 0 0 1 .5346 3.0137zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
              <span
                className={`ml-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                API
              </span>
            </div>

            <Dialog
              isOpen={showDialog}
              onClose={() => setShowDialog(false)}
              onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem("openai_api_key", apiKey);
                setShowDialog(false);
                setApiKey("");
              }}
              title="Add Your OpenAI API Key"
              isDark={isDark}
            >
              <input
                type="text"
                placeholder="Enter OpenAI API Key"
                className={`w-full rounded-xl border-2 shadow-lg p-3 ${
                  isDark
                    ? "border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:border-indigo-500 hover:bg-gray-700 dark:shadow-indigo-900/50"
                    : "border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:border-gray-300 hover:bg-gray-200"
                } outline-none hover:shadow-xl`}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    localStorage.setItem("openai_api_key", apiKey);
                    setShowDialog(false);
                    setApiKey("");
                  }
                }}
              />
            </Dialog>
            <a
              href="https://github.com/rakshit9/rokkiAi"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg ${themeClasses.button} transition-colors duration-200 flex items-center justify-center`}
              aria-label="GitHub"
            >
              <svg
                className={`w-5 h-5 ${
                  isDark ? "text-white" : "text-gray-800"
                } transition-colors duration-200`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-lg ${themeClasses.button} transition-colors duration-200 ml-2`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                className="w-5 h-5 text-white transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-800 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
