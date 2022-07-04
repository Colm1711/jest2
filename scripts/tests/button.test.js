/**
 * @jest-environment jsdom
 */

const buttonClick = ("../button");

//this is a new directive 
//there are other directives that make up what is known as the life cycle of a test

beforeEach(() =>{
    //as there is no actual hmlt for this test as there is no a HTML page, so instead  
    //jsdom creates a mock DOM for us to use. We don't need to put the entire HTML here  
    //just the bit that we want to test
    document.body.innerHTML = '<p id="par"></p>';
});

//now for the test
describe("DOM tests", () =>{
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
});