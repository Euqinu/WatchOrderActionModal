# Order Action Modal

This project has one key component i.e. Order. All the values are loaded from the provided api.

When you accept the sale, post call is being made for accepting the offer. Please note that there is a 
setTimeout function which is used to replicate api response time as we see in real world scenario. Currently, I
have set it for 3 second. There is a Congrats message once the api call is hit.

Same goes with the reject option.

Also, the title of the page is changed with Bezel and it's logo.


## Tech stack

It is entirely on React. We have used axios to handle api request. All the apis are listed on api folder.
I have used MUI library for the loader. Rest I tried to use plain html elements in most of the places instead of MUI.
For CSS, I have used styled components.

## How to start

### `Clone this repo`

### `npm install`
Installs all the dependencies of the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

