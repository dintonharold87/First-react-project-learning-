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

/* CREATING A COMPONENT
1. We create a function with the name of the component we are creating, the function name should start with uppercase letter.
2. It should return the content that we want to display on our page
3. In the ReactDOM function, call the function you created like as if it's an html tag inorder to render it */

function MainContent(){
    return (
        <h1>I'm learning React JS framework!</h1>
        
    )
}

ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.getElementById("root")
);