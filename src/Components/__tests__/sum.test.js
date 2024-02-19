import {Sum } from "../Sum";

test("Sum Function should calculate the sum of two Numbers", ()=>{

    const result =Sum(3,4);

    //Assertion
    expect(result).toBe(7);
});