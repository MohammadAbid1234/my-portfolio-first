import "./service.css";
import Item from "./item";


export default function Service() {
  const services = [
    {
      name: "Backend Development",
      details:
        "PHP, Laravel and MySQL for robust server-side solutions. Experience in building scalable APIs and database management systems.",
      icon: "bi-hdd-network" // Backend icon
    },
    {
      name: "Frontend Development",
      details:
        "React.js and JavaScript for dynamic user interfaces. Proficient in creating responsive designs and enhancing user experience.",
      icon: "bi-display" // Frontend icon
    },
    {
      name: "Database Design",
      details:
        "MySQL for efficient data storage and retrieval. Skilled in designing normalized databases and optimizing queries for performance.",
      icon: "bi-database" // Database icon
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <Item {...services[0]} />
          <Item {...services[1]} />
          <Item {...services[2]} />
        </div>
      </div>
    </section>
  );
}
