export default function ExperienceItem(props) {
    return (
      <div className="timeline-item">
        <div className="timeline-date">{props.date}</div>
        <div className="timeline-content">
          <h3 className="timeline-role">{props.role}</h3>
          <h4 className="timeline-company">{props.company}</h4>
          <p className="timeline-description">{props.description}</p>
        </div>
      </div>
    );
  }
  