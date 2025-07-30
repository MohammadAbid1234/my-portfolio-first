import "./Education.css";
import EducationItem from "./EducationItem";

export default function Education() {
  const educationData = [
    {
      title: "High School",
      details: "Studied at Habibia High School with an average of 95%."
    },
    {
      title: "University",
      details: "Admitted to Kabul University by passing the Kankor Exam with a score of 326. Graduated from Kabul University in 2025 with an average of 89%."
    },
    {
      title: "English Diploma",
      details: "Completed an English Diploma at the TTC Center."
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">EDUCATION</h2>
          <p className="section-desc">
            A snapshot of my academic journey.
          </p>
        </div>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
