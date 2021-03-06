// Global variable called ReactDOM
// ReactDOM.render is used to display html
// first parameter (what i want to render)
// second parameter(where i want to render)
// ReactDOM.render(<h1>Hello, React!, I have to learn you by force</h1>, document.getElementById("root"));
ReactDOM.render(
  <ul>
    <li>wasap</li>
    <li>folks</li>
  </ul>,
  document.getElementById("myList")
);
// 1.REACT IS COMPOSABLE
/* CREATING A COMPONENT
1. We create a function with the name of the component we are creating, the function name should start with uppercase letter.
2. It should return the content that we want to display on our page
3. In the ReactDOM function, call the function you created like as if it's an html tag inorder to render it */

function MainContent() {
  return <h1>I'm learning React JS framework!</h1>;
}

ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.getElementById("root")
);

// #########################################
// #########################################
// #########################################
// 2.REACT IS DECLARATIVE(WHAT SHOULD BE DONE)
// JSX-Javascript xml
// ReactDOM.render(<h1>Hello, React!, I have to learn you by force</h1>, document.getElementById("root"));
// VANILLA js is imperative(how should things be done)
/* Recreate the above line of code using vanilla js
append an h1 element the div with an id of root(without using innerHTML)
 */
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);

/* JSX-Javascript XML 
in JSX we use className instead of class
When JSX is run, it returns objects that javascript can understand
JSX renders a single parent element at a time, meaning if you want to render two paragraph elements at once, they should be wrapped in like a div*/
const element = (
  <div>
    <h1 className="header">Hello, React!, I have to learn you by force</h1>
    <p>Introducing JSX(Javascript XML)</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
console.log(element);

const navbar = (
  <nav>
    <h1>Dintaine SneakStore</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
ReactDOM.render(navbar, document.getElementById("myNavBar"));

/* CREATING CUSTOM COMPONENTS
1. We have to use pascalCase naming covention(capitalize the first letter of each word in the component name)
2. We call the function in angle barackets as if writing html(<DintaineComponent />) */