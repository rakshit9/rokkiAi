import { type CoreMessage } from "ai";
import { Loader2 } from "lucide-react";

interface MessageBodyProps {
  messages: CoreMessage[];
  isDark: boolean;
}

const MessageBody = ({ messages,isDark }: MessageBodyProps) => {
  return (
    <div className="z-40 container mx-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.role === "user" ? "justify-end mr-4" : "justify-start ml-4"}`}>
          <div className={`rounded-lg p-4 max-w-2xl flex items-center gap-2 ${
            message.role === "user"
              ? "bg-gray-800 text-white ml-auto hover:bg-gray-700 transition-colors"
              : isDark
                ? "bg-gray-900 text-gray-100 mr-auto"
                : "bg-gray-100 text-gray-900 mr-auto"
          }`}>
            {message.role !== "user" && (
              <div className="relative">
                <svg
                  className={`h-8 w-8 absolute -left-8 top-1/2 -translate-y-1/2 transition-all duration-300 drop-shadow-lg`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Glowing background effect */}
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    className="opacity-20"
                    fill="currentColor"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.1;0.4;0.1"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Outer ring with gradient and glow */}
                  <circle
                    className={`${message.content ? '' : 'animate-spin'} drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]`}
                    cx="12"
                    cy="12"
                    r="9"
                    strokeDasharray="56.55"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="url(#gradient)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="56.55;0"
                      dur="1.8s"
                      repeatCount={message.content ? "0" : "indefinite"}
                    />
                  </circle>

                  {/* Inner pulsing circle */}
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    className={`${message.content ? 'scale-100' : 'scale-95'} transform transition-transform`}
                    fill="url(#innerGradient)"
                    opacity="0.85"
                  >
                    <animate
                      attributeName="r"
                      values="4;6;4"
                      dur="1.8s"
                      repeatCount={message.content ? "0" : "indefinite"}
                    />
                  </circle>

                  {/* Center icon */}
                  {message.content ? (
                    <g className="transform origin-center">
                      <path
                        d="M9 12l2 2 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="opacity-90"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="20"
                          to="0"
                          dur="0.5s"
                          fill="freeze"
                        />
                      </path>
                    </g>
                  ) : (
                    <g className="transform origin-center">
                      <path
                        d="M12 8v8M8 12h8"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 12 12"
                          to="360 12 12"
                          dur="1.2s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  )}

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.95 }} />
                      <stop offset="60%" style={{ stopColor: 'currentColor', stopOpacity: 0.6 }} />
                      <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
                    </linearGradient>
                    <radialGradient id="innerGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="10%" style={{ stopColor: 'currentColor', stopOpacity: 0.95 }} />
                      <stop offset="80%" style={{ stopColor: 'currentColor', stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0.1 }} />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            )}
            {typeof message.content === "string" ? message.content : JSON.stringify(message.content)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageBody;