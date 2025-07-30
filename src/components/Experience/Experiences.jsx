import "./Experience.css";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const experienceData = [
    {
      date: "Jan 2025 - May 2025",
      role: "Frontend Developer",
      description:
        "Developed responsive user interface for computer store e-commerce platform with modern design principles using React.js",
      company: "Elite Valley"
    },
    {
      date: "2024 - 2025",
      role: "Backend Developer",
      description:
        "Developed backend infrastructure for futsal facility management and Etifaq e-commerce",
      company: "Elite Valley"
    },
    // {
    //   date: "Jul 2021 - Jul 2025",
    //   role: "Bachelor of Computer Science",
    //   description:
    //     "Relevant Coursework: Software Engineering, Database Management Systems, Web Development, Object-Oriented Programming",
    //   company: "Kabul University"
    // }
  ];

  return (
    <section id="experience">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">EXPERIENCE & EDUCATION</h2>
          <p className="section-desc">
            A summary of my professional experience and academic background.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
