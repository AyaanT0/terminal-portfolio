import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Want proof of concept? Here you go. <br />
        Here are some of my projects that you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Ayaan Tunio's Blog",
    desc: "My personal blog where I can talk about my projects, new technologies, and anything else.",
    url: "https://ayaantunio.me/blog/",
  },
  {
    id: 2,
    title: "VoxiAI",
    desc: "A VSCode AI extension that summarizes, explains, and edits code, generates tests, finds bugs, and more.",
    url: "https://github.com/ayaant0/VoxiAI",
  },
  {
    id: 3,
    title: "Library Management System",
    desc: "A beatiful and functional library system that features adding, removing, and checking in and out books, and well as search.",
    url: "https://project.ayaantunio.me/librarymanagementsystem/",
  },
  {
    id: 4,
    title: "CitySearch",
    desc: "A Hackathon project that locates accessible locations for disabled individuals, and ranks them on a few factors.",
    url: "https://github.com/AyaanT0/CitySearch-Rating-Algorithm",
  },
];

export default Projects;
