import "./about.css";
import aboutImage from '../../assets/images/about.jpg';

export default function About() {
  return (
    <>
      <div className="about" id="about" >
        <h2 className="title">About Me</h2>
        <img 
          src={aboutImage} 
          alt="milad" 
          className="about-img"
          style={{ width: "100px", height: "100px" }} 
        />
        <p className="info">
          Dedicated Full Stack Developer with 1.5 years of experience in web application development. Skilled in frontend and backend technologies, including React.js, Laravel, and MySQL. Experienced in creating scalable solutions for management systems and e-commerce platforms, with strong problem-solving skills and expertise in Docker and Flutter for mobile development.
        </p>
      </div>
    </>
  );
}
