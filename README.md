# Star Wars Movies

All Star Wars Movies fetched from different data sources.

**_As the SWAPI GRAPHQL API only allows same-origin requests, I've cloned their repository to run an instance of the server locally. This explains the existence of the swapi-graphql directory in this app's structure._**

## Installation

1. cd into **/swapi-graphql**, install all dependencies and start the local server:

```bash
npm install
npm start
```

2. The server URL will be printed in the terminal (which will look something like this: `http://localhost:63121`). Open **/client/src/api/apollo-client/index.tsx** and replace the current `uri` value on line 14 with your server URL.

3. cd into **/client**, install all dependencies and start the client side:

```bash
yarn install
yarn start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate...

## License

[MIT](https://choosealicense.com/licenses/mit/)
