# Newest York Times Feed

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octocat: Getting Started

This project was made focusing on the architecture of high scalable projects. The App itself is small but is 100% ready to get as big as possible

:heavy_check_mark: Styled-Components

:heavy_check_mark: Webpack@3

:heavy_check_mark: Dynamic Routes

:heavy_check_mark: React@16

:heavy_check_mark: i18n dynamic dictionary ready for languages, from now only english :globe_with_meridians:

:heavy_check_mark: High Scale Svg Icons Workflow

:heavy_check_mark: Reusable High scale Modal

:heavy_check_mark: Babel@7

:heavy_check_mark: Cross-Browser Solution! (even for MS Edge)




Made with :heart: and Redux-zero.

## :fire: Why Redux-zero as a state manager?

[Redux-zero](https://github.com/redux-zero/redux-zero) is a lightweight state container based on Redux.
I would like to share 3 arguments to choose redux-zero over redux.

1. Is lighter(less than 1kb) than redux and in projects that are not necessarily high usage of reducers, it helps to focus on what is important.
2. I participated in the conception of this lib, made mostly by an ex-coworker.
3. I'm currently focusing my career in leadership and share knowledge that I've learned across these years, so would be
   an honor gives a presentation about this amazing library.

More about Redux-zero [here](https://medium.com/@matheusml/introducing-redux-zero-bea42214c7ee)


## :cloud: Installation
Makefiles aren't Windows friendly, if you have minGW64 and whole environment to run the makefile(Unix/macOS) do this:

```sh
make installation
make build
make start-server
access http://localhost:3000/nyttop
navigate through menu links at the header
```

If you **don't** have makefile enviroment ready, do this instead :

```sh

npm install or yarn install
npm run build
npm run start:server
access http://localhost:3000/nyttop
navigate through menu links at the header
```

**Requires node >= 8.9.3**

## development env?
```sh
npm install or yarn install
npm run dev
access http://localhost:3000/nyttop
navigate through menu links at the header
```


## Tests

- % stmts = 78.9%
- % Branch = 73.26%
- % funcs = 74.4%
- % Lines = 79.53%

- Average ~= **76.5%**

## :fire: Docker?
Due to modules incompatibility issues with webpack after a major update, I couldn't be able to deliver this project dockerized. I've already made the Dockerfile as you guys can see in the root of the project, but debugging more than 1800 deps inside node_modules is challenging in a short time

## Roadmap

**Release 0.1** (current) - First release of the app

**Release 0.2** - Refining UI/UX

**Release 0.3** - Improvements in mobile devices screens

**Release 0.4** - Enable full navigation through main page ("/nyttop")

**Release 0.5** - Enable support for 2 languages(english and spanish)

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT
