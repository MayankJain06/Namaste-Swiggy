import { render } from "@testing-library/react"
import Header from "../Header"

it("Should load Header Component with a Login button", ()=>{
    render(<Header/>);
})