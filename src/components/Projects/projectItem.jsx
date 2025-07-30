export default function ProjectItem(props) {
    return (
      <div className="project-card">
        <h3 className="project-name">{props.name}</h3>
        <h4 className="project-role">{props.role}</h4>
        <p className="project-stack"><strong>Stack:</strong> {props.stack}</p>
        <p className="project-description">{props.description}</p>
      </div>
    );
  }
  