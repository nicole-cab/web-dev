import style from "./home.module.css";

function Home() {
  const borderStyle = {
    border: "solid yellow",
  };
  return (
    <div className="home">
      <div className={style.tabs + "row d-flex"} style={borderStyle}>
        <div
          className="col-5 m-0 p-0 d-flex align-items-center"
          style={borderStyle}
        >
          <p className="tab align-self-center" style={borderStyle}>
            For you
          </p>
        </div>
        <div className="col-6">
          <p className="tab text-center">Following</p>
        </div>
        <div className="col-1">
          <p className="tab text-center">S</p>
        </div>
      </div>
      <br />
      <div
        style={borderStyle}
        className="h-100 d-flex align-items-center justify-content-center"
      >
        <p>Test</p>
      </div>
    </div>
  );
}
export default Home;
