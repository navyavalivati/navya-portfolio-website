import experienceList from "./experienceData";
import "./Experience.css";
export default function Experience() {
  return (
    <div className="experience">
      <h1>Experience Section </h1>
      <div className="flashcard-container">
        {experienceList.map((exp) => (
          <div
            key={exp.id}
            className={`flashcard ${exp.id % 2 === 0 ? "right" : "left"}`}
          >
            <h3>{exp.role}</h3>
            <img src={exp.logo} alt="Logo" className="flashcard-logo" />
            <p>{exp.duration}</p>

            <ul>
              {exp.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
