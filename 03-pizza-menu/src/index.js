import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    color: "red",
  },
  {
    skill: "React",
    level: "beginner",
    color: "lightblue",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "orange",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="/profile-card-photo.jpg"
      alt="A programmer coding at night"
      className="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Fernando Destefani</h1>
      <p>
        Front-end web developer in formation and medical doctor. When not coding
        ou seeing pacientes, I like to play video games, experiment with
        different foods and watch some TV series.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}

      {/* <Skill skill="HTML+CSS" emoji="💪🏼" color="blue"/>
      <Skill skill="JavaScript" emoji="💪🏼" color="yellow"/>
      <Skill skill="Web Design" emoji="💪🏼" color="green"/>
      <Skill skill="Git and GitHub" emoji="💪🏼" color="red"/>
      <Skill skill="React" emoji="🐣" color="lightblue"/>
      <Skill skill="Python" emoji="👍🏼" color="orange"/> */}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "🐣"}
        {skillObj.level === "intermediate" && "👍🏼"}
        {skillObj.level === "advanced" && "💪🏼"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
