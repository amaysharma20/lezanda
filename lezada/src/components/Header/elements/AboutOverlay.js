import { Tooltip } from "react-tippy";
import { IoIosClose } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`about-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="about-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="about-overlay__content">
        <button
          className="about-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="about-overlay__content-container d-flex flex-column justify-content-between h-100">
          <div className="about-overlay__widget-wrapper">
            <div className="about-widget">
              <h2 className="about-widget__title">About Us</h2>
              <p>
                As we face a global healthcare crisis caused by COVID-19, there
                is a need to bring in products and technology in the market to
                help diagnose and disinfect faster. UV-C is a proven technology
                that has been successfully used as a germicide and has been
                recommended by top health agencies as a potent weapon against
                the Coronavirus. Vitalyse Meditech is bridging the gap between
                medical technology and its accessibility to common man.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="about-overlay__contact-widget">
            <p className="email">
              <a href="mailto:connect@coronacleaner.in">
                connect@coronacleaner.in
              </a>
            </p>
            <p className="phone">
              +91-83186 14484
              <br />
              +91-99581 11401
            </p>
            <div className="social-icons">
              <ul>
                {/*<li>
                  <Tooltip
                    title="Twitter"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.twitter.com" target="_blank">
                      <FaTwitter />
                    </a>
                  </Tooltip>
                </li>*/}
                <li>
                  <Tooltip
                    title="Facebook"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.facebook.com" target="_blank">
                      <FaFacebookF />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Instagram"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.instagram.com" target="_blank">
                      <FaInstagram />
                    </a>
                  </Tooltip>
                </li>
                {/*<li>
                  <Tooltip
                    title="Youtube"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.youtube.com" target="_blank">
                      <FaYoutube />
                    </a>
                  </Tooltip>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
