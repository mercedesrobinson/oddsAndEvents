// constants
const $app = document.querySelector("#app");
// functions
// Step 1 Making Heading "Odds and Events"
const makeh1 = () => {
  const $h1 = document.createElement("h1");
  $h1.textContent = "Odds and Events"
  $app.append($h1);
  return $h1;
}
// Step 1.A Call out Function created in Step 1
makeh1();
// Step 2.A Make it so that clicking Add Number button after Entering a number in Input Box
const addNum = (event) => {
  event.preventDefault();
}
// Step 2 Making Form "Add a number to the bank"
const makeForm = () => {
  const $form = document.createElement("form");
  $app.append($form);
  $form.innerHTML = `
        <form>
  <label for="fname">Add a number to the bank</label>
  <!--This is a comment (line below this comment creates and input text box)-->
  <input type="text" id="bank" name="fname">
  <button>Add Number</button>
  <button>Add Sort 1</button>
  <button>Sort All</button>
</form>
    `;
    // Step 2.B Add an event listener for clicking submit button in form.
    $form.addEventListener("submit", addNum)
    return $form;
};
// Step 2.C Call out Function
makeForm();
// Step 4 Make a Section with Bank, Odds, and Evens forms within.
const makeSection = () => {
  const $section = document.createElement("section");
  $app.append($section);
  $section.innerHTML = `
    <section>
      <h2>Bank</h2>
      <form>
        <label for="fname"></label>
        <input type="text" id="fname" name="fname">
      </form>
       <h2>Odds</h2>
      <form>
        <label for="fname"></label>
        <input type="text" id="fname" name="fname">
      </form>
         <h2>Evens</h2>
      <form>
        <label for="fname"></label>
        <input type="text" id="fname" name="fname">
      </form>
    </section>
  `
  return $section;
}
// Step 4.A Call out function
makeSection();
// To Do
// Move addNum value to input value of Bank form.
// Build a function that moves first input value from Bank form to Odd or even form  after Sort 1 clicked:
    // if (inputValue % 2 === 0) {
    //   assign to even form input text box
    // }
    // else {
    //   assign to odd input text box
    // }
// After Sort all clicked, repeat previous if function logic.