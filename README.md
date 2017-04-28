# Hotspot Plaza Hotéis

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/brunonigro/new-hotspot/blob/master/LICENSE.md)

Repositório para a nova arquitetura do projeto Hotspot Plaza Hoteis

## Stack

- Task Runner: [Gulp](http://www.gulpjs.com/)
- HTML Template Engine: [Pug](http://pugjs.com/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://www.stylus-lang.com/)
- Browser Testing: [Browsersync](http://browsersync.io)

## Run the project locally

**1.** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2.** Clone the project and install the dependencies:

```sh
$ git clone
$ cd csshortcut-app
$ npm install https://github.com/brunonigro/new-hotspot.git
```
**3.** Run static server and livereload:

```sh
$ gulp server
```

## Folders Structure

    .
    ├── README.md
    ├── LICENSE.md
    ├── CONTRIBUTING.md
    ├── out/
    ├── src/
    |   ├── icons/
    |   ├── assets/
    |   |   ├── img/
    |   |   ├── scripts/
    |   |   |   └── script.js
    |   |   └── styles/
    |   |       ├── modules/
    |   |       └── style.styl
    |   ├── partials/
    |   |   ├── footer.pug
    |   |   └── header.pug
    |   ├── layouts/
    |   |   └── default.pug
    |   ├── projects.pug
    |   └── index.pug
    ├── gulpfile.js
    ├── package.json
    ├── .editorconfig
    └── .gitignore

## Automatic Tasks

    - `$ gulp build`: Compile, concat and minify all files.
    - `$ gulp server`: Watch the files to build and start a static server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/brunonigro/new-hotspot/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/brunonigro/new-hotspot/blob/master/CONTRIBUTING.md).

## License
[MIT License](https://github.com/brunonigro/new-hotspot/blob/master/LICENSE.md) © [Bruno N.](http://besopmac.me/)
