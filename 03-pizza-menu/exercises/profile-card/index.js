import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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
    <img src="/profile-card-photo.jpg" alt="A programmer coding at night" className="avatar"/>
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
    <div className="skill-list">
      <Skill skill="HTML-CSS" emoji="💪🏼" color="blue"/>
      <Skill skill="JavaScript" emoji="💪🏼" color="yellow"/>
      <Skill skill="Web Design" emoji="💪🏼" color="green"/>
      <Skill skill="Git and GitHub" emoji="💪🏼" color="red"/>
      <Skill skill="React" emoji="🐣" color="lightblue"/>
      <Skill skill="Python" emoji="👍🏼" color="orange"/>
    </div>
  );
}

function Skill(props) {
  return <span className="skill" style={{backgroundColor: props.color}}>{props.skill} {props.emoji}</span>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
