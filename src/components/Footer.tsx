interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer className={`fixed bottom-0 w-full py-4 text-center border-t ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} transition-colors duration-200`}>
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} RokkiAi. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 