import "./Navbar.css";

const Navbar =()=>{
    return (
      <nav className="container">
        <img className="nav-logo" src="https://www.viithiisys.com/images/uploads/logo.png" alt="Visitor" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="btn">Contact Us</button></li>
        </ul>
      </nav>
    )
  }
  export default Navbar;
  