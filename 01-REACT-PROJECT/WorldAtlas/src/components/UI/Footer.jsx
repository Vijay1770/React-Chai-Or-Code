import footerContact from "../../api/footerApi.json";
import { IoIosCall } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";

export const Footer = () => {
  //json fies me icons as a component pass nahi kra skte hai isliye ham ek alg se object crete karte hai...
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoIosCall: <IoIosCall />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((currData, index) => {
          const { icon, title, details } = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon"> {footerIcon[icon]} </div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* COPYRIGHT AREA... */}
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://WorldAtles.com/" target="_blank">
                  WorldAtles
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">
                    {" "}
                    <FaHome className="Footer-icon" />
                    {/* Home */}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="https://www.instagram.com" target="_blank">
                    <FaInstagramSquare className="Footer-icon"/>
                    {/* Instagram */}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.facebook.com" target="_blank">
                    <IoLogoFacebook className="Footer-icon"/>
                    {/* Facebook */}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <MdContactPhone className="Footer-icon"/>
                    {/* Contact */}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
