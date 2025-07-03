import { useEffect, useState } from "react";

const Loader = () => {
  const [isHidden, setIsHidden] = useState(false);

  const title = "HELLO :)";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#202020] flex flex-col items-center justify-center text-white transition-transform duration-1000 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-4xl lg:text-8xl font-bold tracking-widest flex gap-2">
        {title.split("").map((char, index) => (
          <span
            key={index}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
