import React from "react";
import ReactDOM from "react-dom/client";

// JSX Syntax
// const jsxHeading = <h1 id="heading">Hello Everyone from JSX 🚀</h1>

const TitleComponent = () => <h1 id="title">This is A Title Component</h1>;

const HeadingComponent = () => (
  // Component Composition -> Component inside another component
  // Nested JSX
   <div id="container">
    <TitleComponent />
    <h2 id="heading">This Is A Heading Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
