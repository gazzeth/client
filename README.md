# Client

Gazzeth frontend to interact with protocol in a human friendly way.

## Requirements

* npm

## Install

```bash
 cd ./client 
 npm install
```

## Enviroment

There must be a file name ".env" at the root of the project that containes the following data:

```
REACT_APP_PROTOCOL_CONTRACT_ADDRESS={ADDRESS}
REACT_APP_DAI_CONTRACT_ADDRESS={ADDRESS}
REACT_APP_API_URL={URL}
REACT_APP_IPFS_URL={URL}
REACT_APP_IPFS_PORT={PORT}
REACT_APP_IPFS_PROTOCOL={PROTOCOL}
REACT_APP_PUBLIC_URL={PATH}
```

{ADDRESS} refers to a etherum address of the contract.

{URL} refers to a url.

{PORT} refers to a port.

{PROTOCOL} refers to a protocol (for example https).

{PATH} refers to the path te aplication will ser its content. Fo example using "/hello" the url of the page home wil be in "localhost/hello".

## Run development

```bash
 npm start
```

## Build production

```bash
 npm run build
```

## Deploy github pages

```bash
 npm run deploy
```