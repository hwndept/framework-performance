# Goal

Gather performans metrics from apps written in different frameworks.

## Idea

All apps implements the same endpoints and then app is being tested using `ab` utility.

## How to use

1. Go to some app inside `app` folder
2. Run `npm install`
3. Run `npm start`
4. Back to root folder and run `npm test`

## Tests

Every app should implement next tests:

1. GET / => 'Hello!'
2. GET /:name => `Hello ${name}`

It's expected that default apps port is 3000.
