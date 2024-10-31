"use client";

import { useState, useEffect } from "react";
import { type CoreMessage } from "ai";
import { getAnswer } from "@/app/action";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MessageBody from '@/components/MessageBody';

export const maxDuration = 30;

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessages: CoreMessage[] = [
      ...messages,
      { content: inputValue, role: "user" }
    ];

    setMessages(newMessages);
    setInputValue("");

    try {
      const apiKey = localStorage.getItem("openai_api_key") ?? "";
      const result = await getAnswer(inputValue, apiKey);
        let accumulatedContent = '';
        for await (const content of result.textStream) {
          accumulatedContent += content;
          setMessages([
            ...newMessages,
            {
              role: 'assistant',
              content: accumulatedContent,
            },
          ]);
        }
    } catch (error) {
      console.error("Error getting answer:", error);
    }
  };

  const isDark = theme === "dark";
  const themeClasses = {
    main: isDark ? "bg-gray-900" : "bg-white",
    nav: isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
    logo: isDark
      ? "text-white hover:text-gray-300"
      : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent hover:from-gray-800 hover:via-gray-600 hover:to-gray-700",
    button: isDark
      ? "text-white hover:bg-gray-700"
      : "text-gray-800 hover:bg-gray-100",
    input: isDark
      ? "border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:border-indigo-500 hover:bg-gray-700 dark:shadow-indigo-900/50"
      : "border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 focus:border-gray-300 hover:bg-gray-200"
  };

  return (
    <div className={`min-h-screen ${themeClasses.main} transition-colors duration-200`}>
      <NavBar
        isDark={isDark}
        themeClasses={themeClasses}
        setTheme={setTheme}
      />

      <main className={`text-gray-900 dark:text-white ${themeClasses.main} transition-colors duration-200`}>
        <div>
          <MessageBody messages={messages}   isDark={isDark}/>

          <div className="fixed inset-x-0 bottom-0 p-4 shadow-lg">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                placeholder="Type here..."
                className={`w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto block rounded-xl border-2 shadow-lg p-3 ${themeClasses.input} outline-none hover:shadow-xl mb-[7vh]`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </div>
          <Footer isDark={isDark} />
        </div>
      </main>
    </div>
  );
}





