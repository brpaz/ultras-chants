# Ultras chants

> My database of the best Ultras / Fan chants.

## Development

First install the project dependencies using npm or yarn (recommneded):

```
yarn install
```

In can start the application in development mode with command:

```
yarn develop
```

To build the final application, run:

```
yarn build
```

## Adding content

This application uses static markdown files as source of truth.

The chants are organized in team folders, inside the `content` parent folder like so:

```
content
├── atalanta
│   ├── il-nostro-folle-amore-sensa-fine.md
│   └── senza-permisi-senza.tessere.md
└── fcporto
    ├── vence-por-nos.md
    └── visto-de-azul-e-branco.md
```

### Add a team

1. Create a new folder with the team name in `content`.
2. Add the team logo in PNG format to `src/assets/<teamname>.png`

### Add a chant

1. Create a new markdown file into `content/<teamname>`

## Build with

- [Gridsome](https://gridsome.org/)

## Author

👤 **Bruno Paz**

- Website: [brunopaz.net](https://brunopaz.net)
- Github: [@brpaz](https://github.com/brpaz)
- Twitter: [@brunopaz88](https://twitter.com/brunopaz88)

## 📝 License

Copyright © 2019 [Bruno Paz](https://github.com/brpaz).

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
