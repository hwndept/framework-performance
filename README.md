# Goal

Gather performans metrics from apps written in different frameworks.

## Idea

All apps implements the same API and then app is being tested using `ab` utility.

## Pre-requirements

1. nodejs + npm(tested with nodejs 6.11.3, npm 3.10.10)
2. docker (tested with 17.09.0-ce, build afdb6d4)

## How to use

1. Run `npm test` command

## Requirements for new app

1. App should be placed in `app` folder
2. App should be containerised
3. App should provide start.sh script that builds container and run it.
4. App should provide stop.sh script that stops container.
5. App should listen for 3000
6. App should implement basic API:
  + `GET / => 'Hello!'`
  + `GET /:name => 'Hello ${name}'`
7. Include app testing by updating `npm test` command
8. Include app stop command into `npm stop:apps` command - Used to stop all the
  apps in a case when something went wrong.
