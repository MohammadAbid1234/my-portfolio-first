export default function EducationItem(props) {
  return (
    <div className="education-card">
      <h3 className="education-title">{props.title}</h3>
      <p className="education-details">{props.details}</p>
    </div>
  );
}
