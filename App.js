import React from "react";
import ReactDOM  from "react-dom/client";

// React.createElement ==> Object ==> HTML(render)

// JSX ==> ( Transpiled before it reaches the JS Engine) --> Parcel --> Babel
// JSX ==> Transpiles into React.createElement ==> React.createElement ==> Object ==> HTML(render)

//React Element
// const heading = (
// <h1 className="head" tabIndex={5}>
//     Namaste React using JSX 🚀</h1>
//     );


     // React Component
    // Class Based components - OLD 
    // Fucntional Based Components - NEW 
    
    // React Functional Component


    // const HeadingComponent = ()=> <h1>Namaste React Fucntional Component</h1>

    const Title =()=> (
         <h1 className="head" tabIndex={5}>
            Namaste React using JSX 🚀</h1>
            );

            // React Functionalcomponents

    const HeadComponent = ()=>(
        <div id="container">
            <Title />
            <h1 className="heading">Namaste React from Functional Component</h1>
        </div>
        
    );


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent />);
