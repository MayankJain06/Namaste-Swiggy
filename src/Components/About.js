import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// Class Component

class About extends React.Component {

    constructor(props){
        super(props);

        //console.log("Parent constructor called");
    }

    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }

    render(){
       // console.log("Parent Render Called");
        return (
            <div>
                <h1>About</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>{({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
                </div>
                <h1>This is Namaste React Web series</h1>
                 {/* <User name={"Mayank Jain (Function)"}/>  */}
                <UserClass name={"Mayank Jain (Class)"} location={"Hyderabad"}/>
            </div>
        );
    }
}


export default About;