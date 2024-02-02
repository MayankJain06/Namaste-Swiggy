import User from "./User";
import React from "react";
import UserClass from "./UserClass";


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
                <h1>This is Namaste React Web series</h1>
                {/* <User name={"Mayank Jain (Function)"}/> */}
                <UserClass name={"Mayank Jain (Class)"} location={"Hyderabad"}/>
            </div>
        );
    }
}


export default About;