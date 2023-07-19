import BackendIcon from "../components/BackendIcon";
import SkillsDetails from "../components/SkillsDetails";
import FrontendIcon from "../components/FrontendIcon";
import ToolsIcon from "../components/ToolsIcon";

const skillsDetails = [
  {
    id: 1,
    title: "Frontend and Design",
    icon: <FrontendIcon />,
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JavaScript",
      },
      {
        id: 4,
        title: "React",
      },
      {
        id: 5,
        title: "Tailwind",
      },
      {
        id: 6,
        title: "Sass",
      },
      {
        id: 7,
        title: "Bootstrap 5",
      },
      {
        id: 8,
        title: "Material UI",
      },
    ],
  },
  {
    id: 2,
    title: "Backend and Database",
    icon: <BackendIcon />,
    stack: [
      {
        id: 1,
        title: "NodeJs",
      },
      {
        id: 2,
        title: "ExpressJs",
      },
      {
        id: 3,
        title: "Firebase",
      },
    ],
  },
  {
    id: 3,
    title: "Tools",
    icon: <ToolsIcon />,
    stack: [
      {
        id: 1,
        title: "Git",
      },
      {
        id: 2,
        title: "GitHub",
      },
      {
        id: 3,
        title: "NPM",
      },
      {
        id: 4,
        title: "Webpack",
      },
      {
        id: 5,
        title: "Visual Studio Code",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-background w-full px-4">
      <div className="relative -top-24 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center max-w-7xl w-full mx-auto bg-background rounded-3xl p-10 shadow-md text-center">
        {skillsDetails.map((item) => {
          return (
            <SkillsDetails key={item.id} title={item.title} items={item.stack}>
              {item.icon}
            </SkillsDetails>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
