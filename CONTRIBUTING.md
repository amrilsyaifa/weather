# Contributing to the Weather App

Thanks for taking the time to contribute !

## Setup

Install the dependencies

```shell
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Build Docker

Build Image Docker

```shell
docker build . -t example/example-image
```

Running Image

```shell
docker run -p 8080:80 example/example-image
```

and open your url with port 8080.


## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.
- **helpers** contains generic helpers functions.
- **styles** contains generic style global.

## Tests

Run tests with `yarn test`.


## Staging App

hosting using heroku, if the first time you open the data is still empty, wait 2 minutes and can refresh.

you can check staging app [https://weather-amril.herokuapp.com](https://weather-amril.herokuapp.com/).