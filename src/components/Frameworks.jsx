import { OrbitingCircles } from "./OrbitalCircle";

export function Frameworks() {
  const skills = [
    "microsoft",
    "html5",
    "css3",
    "javascript",
    "php",
    "laravel-2",
    "tailwindcss",
    "bootstrap-5",
    "react",
    "mysql",
    "git",
    "composer",
    "github",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="rounded-sm hove:scale-110 duration-200" />
);
