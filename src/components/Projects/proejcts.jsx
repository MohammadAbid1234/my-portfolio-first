import "./Project.css";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const projectsData = [
    {
      name: "Computer Store Management System",
      role: "Backend Developer",
      stack: "Laravel, PHP, MySQL",
      description:
        "Developed an inventory system to streamline operations and improve accuracy."
    },
    {
      name: "Futsal Management System",
      role: "Backend Developer",
      stack: "Laravel, PHP, MySQL",
      description:
        "Created backend for bookings and scheduling to automate operations and boost service."
    },
    {
      name: "Computer Store E-commerce Platform",
      role: "Frontend Developer",
      stack: "React.js, JavaScript, HTML5, CSS3",
      description:
        "Built a responsive UI for smooth navigation and better user experience."
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-desc">
            Some key projects I have worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
