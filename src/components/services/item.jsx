export default function Item(props) {
  return (
    <div className="col-4">
      <div className="service-box">
        <div className="service-icon">
          <i className={`bi ${props.icon}`}></i>
        </div>
        <div className="service-content">
          <h3 className="service-title">{props.name}</h3>
          <p className="service-info" style={{ textAlign: "left" }}>
            {props.details}
          </p>
        </div>
      </div>
    </div>
  );
}
