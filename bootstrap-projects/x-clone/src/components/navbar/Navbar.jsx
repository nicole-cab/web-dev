import homeIcon from "../../img/home_icon.png";
import exploreIcon from "../../img/explore_icon.png";
import notificationsIcon from "../../img/notifications_icon.png";
import messageIcon from "../../img/message_icon.png";
import bookmarkIcon from "../../img/bookmark_icon.png";

import styles from "./navbar.module.css";

const borderStyle = {
  border: "yellow solid",
};

function Navbar() {
  return (
    <>
      <ul className="nav flex-column justify-content-between h-100">
        <div className="d-flex flex-column align-items-center">
          <li className="nav-item w-50">
            <a className="nav-link" href="#">
              <span className={styles.icon}>𝕏</span>
            </a>
          </li>

          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              href="#"
            >
              <img
                src={homeIcon}
                alt="home icon"
                className={styles.icon + " float-start"}
              />
              <a className="nav-link float-end m-0 p-0" href="#">
                Home
              </a>
            </a>
          </li>

          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              href="#"
            >
              <img
                src={exploreIcon}
                alt="explore icon"
                className={styles.icon + " float-start"}
              />
              <a className="nav-link float-end m-0 p-0" href="#">
                Explore
              </a>
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              href="#"
            >
              <img
                src={notificationsIcon}
                alt="notifications icon"
                className={styles.icon + " float-start"}
              />
              <a className="nav-link float-end m-0 p-0" href="#">
                Notifications
              </a>
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              href="#"
            >
              <img
                src={messageIcon}
                alt="message icon"
                className={styles.icon + " float-start"}
              />
              <a className="nav-link float-end m-0 p-0" href="#">
                Messages
              </a>
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              aria-disabled="true"
            >
              Lists
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              href="#"
            >
              <img
                src={bookmarkIcon}
                alt="bookmark icon"
                className={styles.icon + " float-start"}
              />
              <a className="nav-link float-end m-0 p-0" href="#">
                Bookmarks
              </a>
            </a>
          </li>

          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              aria-disabled="true"
            >
              Communities
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              aria-disabled="true"
            >
              Premium
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              aria-disabled="true"
            >
              Profile
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              aria-disabled="true"
            >
              More
            </a>
          </li>
          <li className="nav-item w-50">
            <a
              className="nav-link d-flex align-items-center justify-content-start"
              aria-disabled="true"
            >
              Post
            </a>
          </li>
        </div>
        <div className="d-flex flex-column align-items-end">
          <li className="nav-item w-50">
            <a className="nav-link" href="#">
              Accounts
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
export default Navbar;
