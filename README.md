# Install
Preconditions: node.js is installed.

## Build and run the application
Run the following commands from within the project directory to start the application.

`
npm install && npm start
`

## To run tests

`npm test`

# Libraries and packages used
* React for render
* React router for navigation
* reactstrap, flex for css components
* jest for testing

# Structure

1. The project has been divided into smaller components.
2. Each component has its own css file.
3. Because of the use of router, App.test.js has been wrapped in <MemoryRouter /> for the test to pass.
4. Two additional tests, PlanConfirmationComponent.test.js and RenderCards.test.js has been added to validate that the link works and the cards are rendered respectively.
5. Constants are initialized in Constants.js.

# Loved..
* Working on the exercise.
* Using flex to render the footer.
* And thanks for the opportunity!

# Challenges faced
1. Responsive display of toggle switch labels for mobile screen. The Monthly plan label wraps to the left and the Yearly plan label wraps to the right. I am still working on that.





