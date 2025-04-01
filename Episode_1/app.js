// I need a heading element ✅ -> React.createElement()
// I need to add hello world to this heading element ✅ -> In the third argument
// I need to have a root ✅ -> ReactDOM.createRoot
// I need to add my heading to this root to render on the website ✅ -> root.render()


// Below is nested implementation -> nesting in child argument
// const heading = React.createElement("h1", {id: "heading"}, React.createElement("h2", {id: "subheading"}, React.createElement("h3", {id: " sub-sub-heading"}, "Hello from h3"))); // Creating an object so that in future an element can be rendered out of it is the part of CORE REACT. Therefore React.createElement()


// Below is various child inside one parent -> child array
const heading = React.createElement("h1", {id: "heading"}, [React.createElement("h2", {id: "subheading"}, "Hello 1"), React.createElement("h3", {id: " sub-sub-heading"}, "Hello from h3")]);

const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root is part of DOM. Therefore ReactDOM.createRoot()
root.render(heading); // Heading till now was a RESCT OBJECT, but render fetches an HTML element out of it and then the element is displayed on the WebPage

// It is not compulsory that only the element having id="root" inside HTML document can work as root. We can have any id name as it is the responsibilty of createRoot which creates root the name of id does not matter

// Anything which is present inside the root (in the HTML document) will be replaced by whatever we render. No matter whatever it is. RENDER IS REPLACED NOT APPENDED!!!!
// Anything present above or below the root (in the HTML document) will not be hampered and will stay as it is.