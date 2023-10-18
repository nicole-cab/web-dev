import "./stylesheet.css";
import styles from "./my-style.module.css";

// there are 3 common ways to style in react with CSS: inline styling, css stylesheets and css modules

// using inline css styling
// with inline styling the value must be a js object
// css properties must be written with camelCase syntax, e.g. background-color to backgroundColor
// you can also create an object with styling information, and refer to it in the style attribute
function Inline() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <>
      <h3 style={headingStyle}>Inline Styling</h3>
      <div style={{ border: "solid", padding: "1rem" }}>
        <h1 style={{ color: "purple" }}>This is using inline styling</h1>
        <p style={{ backgroundColor: "lightblue" }}>Add a little Style!</p>
        <p style={myStyle}>CSS is cool</p>
      </div>
    </>
  );
}

const headingStyle = {
  textDecoration: "underline",
};

// using a css stylesheet, e.g. "stylesheet.css"
function Stylesheet() {
  return (
    <>
      <h3 style={headingStyle}>CSS Stylesheet</h3>
      <div className="stylesheet">
        <h2>This is using an imported CSS stylesheet</h2>
        <p>This is cool isn't it</p>
      </div>
    </>
  );
}

// using css modules
// css modules are more convinient for components that are placed in separate files
// the css inside a module is available only for the component that imported it, and you don't need to worry about name conflicts
// you create a css module with ".module.css" extesion, e.g. my-style.module.css

// to use it import the module: import styles from "./my-style.module.css"
// then use "styles.className" to use a class
function Modules() {
  return (
    <>
      <h3 style={headingStyle}>CSS Modules</h3>
      <div className={styles.modules}>
        <h2>This is using a CSS module</h2>
        <p>This is also cool isn't it</p>
      </div>
    </>
  );
}

function CSS() {
  return (
    <>
      <h1 className="heading">React CSS Styling</h1>
      <Inline />
      <Stylesheet />
      <Modules />
    </>
  );
}

export default CSS;
