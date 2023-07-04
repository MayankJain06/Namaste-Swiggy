{/* <div id="parent">
    <div id="child1">
    <h1> Iam a h1 tag</h1>
    <h2> Iam a h2 tag</h2>
    </div>
    <div id="child2">
    <h1> Iam a h1 tag</h1>
    <h2> Iam a h2 tag</h2>
    </div>
</div> */}

const parent=React.createElement("div",{id:"parent"}, [
React.createElement("div",{id:"child1"}, 
[React.createElement("h1",{}, "Iam a heading tag"), React.createElement("h2",{}, "Iam a heading tag")
]),
React.createElement("div",{id:"child2"}, 
[React.createElement("h1",{}, "Iam a heading tag"), React.createElement("h2",{}, "Iam a heading tag")
])
]);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement("h1",{id:"heading",xyz:"abc"}, "Hello World from React!");

// console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);