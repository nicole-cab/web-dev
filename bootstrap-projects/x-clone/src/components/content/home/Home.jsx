import { useState } from "react";
import styles from "./home.module.css";
import settingsIcon from "../../../img/settings_icon.png";
console.log(settingsIcon);

function Home() {
  const [tabStyle, setTabStyle] = useState({
    forYouStyle: "tab-active tab",
    followingStyle: "tab-inactive tab",
  });

  const handleForYou = () => {
    setTabStyle({
      forYouStyle: "tab-active tab",
      followingStyle: "tab-inactive tab",
    });
  };
  const handleFollowing = () => {
    setTabStyle({
      forYouStyle: "tab-inactive tab",
      followingStyle: "tab-active tab",
    });
  };

  return (
    <div className="home">
      <div className="tabs row d-flex">
        <div className="col-5 m-0 p-0 d-flex align-items-center justify-content-center">
          <button className="tab-button w-100 h-100" onClick={handleForYou}>
            <span className={tabStyle.forYouStyle}>For you</span>
          </button>
        </div>
        <div className="col-6 m-0 p-0 d-flex align-items-center justify-content-center">
          <button className="tab-button w-100 h-100" onClick={handleFollowing}>
            <span className={tabStyle.followingStyle}>Following</span>
          </button>
        </div>
        <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-center">
          <button className="settings-button d-flex align-items-center justify-content-center">
            <img
              className={styles.settings_icon + " tab text-center"}
              src={settingsIcon}
            />
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}
export default Home;
