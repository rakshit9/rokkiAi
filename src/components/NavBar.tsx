import { FC } from 'react';

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
  return (
    <nav className={`${themeClasses.nav} border-b transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className={`text-3xl font-black tracking-widest transition-all duration-300 ${themeClasses.logo} cursor-pointer px-4 py-2`}>
          RokkiAi
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/rakshit9/rokkiAi"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg ${themeClasses.button} transition-colors duration-200 flex items-center justify-center`}
            aria-label="GitHub"
          >
            <svg className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'} transition-colors duration-200`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-lg ${themeClasses.button} transition-colors duration-200 ml-2`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-800 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 