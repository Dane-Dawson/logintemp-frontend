# README

## Welcome! 

### Take a moment to read through this brief README before you do anything else!

This is a template to help you with AN approach (not the only or the best) for setting up JWT authentication, and is paired with the following back-end template:

https://github.com/Dane-Dawson/logintemp-backend

I HIGHLY ENCOURAGE not to just clone this repo and make your project off this as a base, or directly copy and paste from it. Rather you should write all your code yourself, even if you use this template as a direct inspiration. Besides the fact that writing it yourself helps you learn and understand it, sometimes there are some hidden character issues with copy pasting from the github pages that will give you very confusing errors. Every .js file has an EXACT COPY of the code with extensive comments to explain whats going on and a uncommented file to show it more clearly. <br/>
To start we run
```
npm install
npm start
```

![Let's do this](https://media0.giphy.com/media/JykvbWfXtAHSM/giphy.gif)

I added a lot of extra stuff and arranged my components and state in a way that made sense to me for this project, but not everything is vital to pay attention to for understanding how JWT works. <br/>👇👇 You can focus primarly on 👇👇

Key front end pieces:

* A "Create user" fetch in the signup component
* A "login" fetch in the login component
* Setting token locally that you recieve from the login fetch and also likely saving the returned user somewhere accessible. In my case I saved the token locally in the login function and invoked a setCurrentUser function within my fetch to set my user in state.
* Using locally stored token in your Authorization header for each authorized fetch, which is done in the authdemo component.

Most notably pay attention to the functions in: 
* App 
* login component
* authdemo component.

Everything else I added was fluff/structure to make it more legible and easier to follow, but all one *NEEDS* is the above.<br/>
Bonus highlights that you can explore:
* Detect token on page refresh for "auto-login"
* Use of Router, Link, and Redirect
* Conditional renders using both ternary and helper functions
* Custom CSS



Take note this is written with the assumption that your backend template is running on localhost:3000, so run your backend first!


Everything below this point came with the default installation of React.<br/>
vVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvV<br/>
## -------Default React README below-------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
