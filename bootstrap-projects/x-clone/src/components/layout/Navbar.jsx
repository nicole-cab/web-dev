function Navbar() {
  return (
    <>
      <ul className="nav flex-column justify-content-between h-100">
        <div className="d-flex flex-column align-items-end">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Lists
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Bookmarks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Communities
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Premium
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              More
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Post
            </a>
          </li>
        </div>
        <div className="d-flex flex-column align-items-end">
          <li className="nav-item">
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
