# Goal

Gather performans metrics from apps written in different frameworks.

## Idea

All apps implements the same endpoints and then app is being tested using `ab` utility.

## Prerequirements

1. nodejs + npm(tested with nodejs 6.11.3, npm 3.10.10)
2. docker (tested with 17.09.0-ce, build afdb6d4)

## How to use

1. Run `npm test` command

## Tests

Every app should implement next tests:

1. GET / => 'Hello!'
2. GET /:name => `Hello ${name}`

It's expected that default apps port is 3000.
