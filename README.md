[![build][travis-ci-master-build-icon]][travis-ci-project-url]

Gather performans metrics from apps written in different frameworks.

## Idea

All apps implements the same API and then app is being tested using
[autocannon](https://www.npmjs.com/package/autocannon) utility.

## Pre-requirements

1. nodejs + npm(tested with nodejs 6.11.3, npm 3.10.10)
2. docker (tested with 17.09.0-ce, build afdb6d4)

## How to use

1. Run `npm test` command
2. Analyze the output in the [.reports](./scripts/.reports) folder(it will be
   created as a result of `npm test` task)

## Requirements for new app

1. App should be placed in `app` folder
2. App should be containerised
3. App should provide `start.sh` script that builds container and runs it.
4. App should provide `stop.sh` script that stops container.
5. App should listen to port `3000`
6. App should implement basic API:

- `GET /hello => 'Hello!'`
- `GET /hello/:name => 'Hello ${name}'`

7. Include app into the test by updating npm `test` command
8. Include app into the stop command by updating npm `stop-all` command - Used
   to stop all the apps in a case when something went wrong.

[travis-ci-master-build-icon]: https://travis-ci.org/hwndept/framework-performance.svg?branch=master
[travis-ci-project-url]: https://travis-ci.org/hwndept/framework-performance
