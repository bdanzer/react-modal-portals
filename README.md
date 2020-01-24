This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start

```bash
yarn install && yarn start
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Explanations

### External Dependencies

* Axios - Chose this since fetch api isn't 100% supported in IE

### Accessibily 

Although not part of the requirements, I added some accessibily features for keyboards and screen readers. When you are on the page start `tabbing` and hit `enter` on things you would normally click. The app does work if you just use your keyboard. If you're on mac os do `command + f5` to turn on VoiceOver while tabbing. It isn't perfect but just small showcase of some a11y support.

### TODO

I marked things in this project with TODO comments on things that could be done in a different way

### Style

I did style everything from scratch without any css/scss frameworks, and the app is mobile responsive

### Persistance

I didn't use any third party libraries for persistance I stuck with just calling directly to window localstorage for simplicity

### State Management

I decided to not use any hooks or redux since the application isn't complicated enough yet although I did try to outline with the `TODOs` where it could be helpful at if the application gets any bigger or more features get added.