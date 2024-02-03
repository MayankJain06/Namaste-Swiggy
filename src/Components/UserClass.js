import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            userInfo : {
                name: "dummy",
                location: "default",
                avatar_url : "",
            }
        }

        console.log( this.props.name +"Child constructor Called");
    }
   async componentDidMount(){
        console.log(this.props.name +"Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/MayankJain06");
        const json = await data.json();
        this.setState({
            userInfo : json,
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unamount");
    }

    render() {
        console.log(this.props.name +"Child rendered Called");

        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name :{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: jainmayank99988@gmail.com</h4>
            </div>
        );
    }
}


export default UserClass;