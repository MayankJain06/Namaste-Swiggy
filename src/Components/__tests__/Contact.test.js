const { render, screen } = require("@testing-library/react")
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case",()=>{
    test("Should load contact us component", ()=>{
        render(<Contact/>);
    
        const heading =screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside Contact component", ()=>{
        render(<Contact/>);
    
        const button =screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load contact us component", ()=>{
        render(<Contact/>);
    
        const button =screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside contact Component", ()=>{
        render(<Contact/>);
    
        const input =screen.getByPlaceholderText("Name");
        expect(input).toBeInTheDocument();
    });
    
    test("Should load 2 input text boxes inside contact Component", ()=>{
        render(<Contact/>);
    
        //Querying
        const inputBoxes =screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
    
        //Assertions
        expect(inputBoxes.length).toBe(2);
    });
})
