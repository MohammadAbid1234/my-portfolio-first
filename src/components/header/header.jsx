import "./header.css"
export default function Header(){
    return(
        // <!-- header -->
        <header id="hero">
          <div className="navbar-container">
            <div className="container d-flex justify-content-between align-items-center">
              {/* <h2 className="logo"><span style={{color:"red"}}></span></h2> */}
              <nav className="navbar">
                <ul className="d-flex">
                  <li><a className="nav-link" href="#hero">Home</a></li>
                  <li><a className="nav-link" href="#about">About</a></li>
                  <li><a className="nav-link" href="#services">Services</a></li>
                  <li><a className="nav-link" href="#education">Education</a></li>
                  <li><a className="nav-link" href="#experience">Experience</a></li>
                  <li><a className="nav-link" href="#projects">Projects</a></li>
                  <li><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <h1 className="hero-title">I am Mohammad  <span style={{color:"red"}}>Abid</span> Formuli</h1>
          <h2 className="hero-desc">be Up to Date always!</h2>
        </header>
    

        
    )


}