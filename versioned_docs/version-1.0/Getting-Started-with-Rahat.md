---
sidebar_position: 4
---

# Getting started with Rahat Systems

Rahat is a web-based application with node-js as backend and uses truffle as a tool to compile.
It uses MongoDB as a database for regular non-blockchain data persistence and solidity smart contract to execute transactions on Ethereum blockchain.

## Pre-requisite

To run Rahat in your system please make sure you have the following app and libraries installed.

- `Node-js --version == 10.18.1`
- `Yarn --version == 1.21.1`
- `MongoDB --version >= 4.2.8`
- `Truffle --version == 5.1.22`

## Installing Rahat Server

To set up this software on your machine locally:

1. Clone this repository https://github.com/esatya/rahat
2. Create a folder named ‘config’ on the root of this repository and add a local.json file. Add the configuration below.

```
{
	"app": {
		"port": 3800,
		"secret": "{32 characters}",
		"url": "{url of your site: http://localhost:3800}",
		"db": "mongodb://localhost:27017/rahat",
		"cors": [
			"*"
		]
	},
	"jwt": {
		"duration": 3600000,
		"duration_long": 604800000
	},
	"services": {},
	"blockchain": {
		"httpProvider": "http://localhost:8545",
		"webSocketProvider": "ws://localhost:8545",
		"networkId": "5777"
	}
}
```

_If you are trying this in your local machine, please install [Ganache](https://www.trufflesuite.com/ganache)_

3.  Install required dependencies and compile smart contracts
    `yarn setup`

4.  Start the server
    `yarn start`
5.  Now, in your browser go to http://localhost:3800/documentation to see API endpoints that are available.

## Installing Rahat Agency Dashboard

1. Clone this repository https://github.com/esatya/rahat-agency
2. Update .env file to add URL of your Rahat server
   `REACT_APP_API_SERVER=http://localhost:3800`

3. Install required dependencies and compile smart contracts
   ``yarn install`

4. Start the server
   `yarn start`
5. Now, in your browser go to http://localhost:3000 and follow the setup instructions on screen.

The document is still a work in progress.  
For a draft of the user manual click here https://bit.ly/3ieVPfJ

Last updated: 9/1/2020
