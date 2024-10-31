import { FC, ReactNode, FormEvent } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent) => void;
  title: string;
  children: ReactNode;
  isDark: boolean;
}

const Dialog: FC<DialogProps> = ({ isOpen, onClose, onSubmit, title, children, isDark }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${
      isDark ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-200 bg-opacity-50'
    }`}>
      <div className={`p-8 rounded-xl shadow-2xl w-[500px] ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-colors duration-200`}>
        <h3 className={`text-lg font-extrabold mb-4 text-left ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          {title}
        </h3>
        <form onSubmit={onSubmit} className="space-y-4">
          {children}
          <div className="flex justify-end gap-3">
            <button 
              type="button"
              className={`px-6 py-3 rounded-xl border-2 ${
                isDark ? 'border-gray-700 text-white hover:bg-gray-700' : 'border-gray-200 text-gray-800 hover:bg-gray-100'
              }`}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-6 py-3 rounded-xl border-2 ${
                isDark ? 'border-gray-700 text-white bg-gray-700 hover:bg-gray-600' : 'border-gray-200 text-gray-800 bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialog; 