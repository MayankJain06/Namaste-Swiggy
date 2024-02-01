import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
    return (
        <div>
            <h1>About</h1>
            <h1>This is Namaste React Web series</h1>
            <User name={"Mayank Jain (Function)"}/>
            <UserClass name={"Mayank Jain (Class)"} location={"Hyderabad"}/>
        </div>
    );
};

export default About;