![blocklancer_github_banner](https://github.com/blocklancer101/blocklancer-dapp/raw/master/public/images/banner.png)

# Blocklancer DApp
The sharing economy without intermediaries.


## Project Overview

Blocklancer is a sharing economy marketplace that enables buyers and sellers of fractional use goods and services (car-sharing, service-based tasks, home-sharing, etc.) to transact on the distributed, open web. Using the Ethereum blockchain and Interplanetary File System (IPFS), the platform and community are decentralized, allowing for the creation and booking of services and goods without traditional intermediaries.

We are specifically building a large-scale commerce network that:
* Transfers direct financial value (listing, transaction, and service fees) from large corporations like Airbnb, Craigslist, Postmates, etc. to individual buyers and sellers
* Transfers indirect financial and strategic value (privately aggregated silos of customer and transaction data) from those same corporations to the entire ecosystem
* Creates new financial value for marketplace participants that contribute to the growth of the network (e.g. building new technology for the Blocklancer network, bootstrapping new product verticals, and referring new users and businesses)
* Is built on an open, distributed, and shared data layer to promote transparency and collaboration
* Immediately allows buyers and sellers across the world to do business with each other without difficult currency conversions or tariffs
* Promotes personal liberty by not allowing a central corporation or government to impose arbitrary and oftentimes onerous rules on how to do business

To accomplish these ambitious goals, the Blocklancer platform is being launched with incentives from the outset to encourage other technologists, businesses, and consumers to build, contribute, and extend the ecosystem with us. We imagine a broad collection of vertical use cases (e.g short-term vacation rentals, freelance software engineering, tutoring for hire) that are built on top of Blocklancer standards and shared data. Together, we will create the Internet economy of tomorrow.


## Try Blocklancer Dapp on the Rinkeby testnet

This demo is currently running on the Rinkeby testnet.
- [Overview and step-by-step instructions](https://medium.com/) 
- [Live Demo](http://localhost:3000)


## Core Technologies

If you're new to the space, it may be helpful to first familiarize yourself with some of the core technologies that we're using to build Blocklancer.

 * [JSON Schema](http://json-schema.org/)
 * [IPFS](https://ipfs.io/)
 * [Ethereum](https://www.ethereum.org/)

## Install and run Blocklancer DApp locally

NOTE: This installs the DApp locally with a local test chain. See below for hosting on a server.

1. Make sure you have `node` version 8.5.0 or greater
```
nvm use 8.5.0  &&
node --version
```

2. Download [truffle](http://truffleframework.com/):
```
npm install -g truffle
```

3. Clone Blocklancer:
```
cd ~/blockchain/blocklancer-dapp &&
git clone https://github.com/blocklancer101/blocklancer-dapp && 
cd blocklancer-dapp
```

4. Start truffle:
```
truffle develop
```
 This will begin a new Ethereum blockchain. It will output 10 accounts that it has put 100 ETH into, and the mnemonic to generate them.

> Truffle DEBUG: `truffle(develop)>`
```
  test
  Listing.deployed().then(function(instance) { return instance.listingsLength(); })
  # migrate --reset
```

5. In the truffle console, type `migrate`. This will compile our contracts and add them to the blockchain.

6. Install [Metamask Chrome Browser Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) or [Metamask Firefox Browser Extension](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)

7. Click the Metamask icon in the toolbar, accept terms, and then click `Import Existing DEN`

8. Enter the seed phrase (Mnemonic):
```
candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
```
 This is the default seed phrase for truffle development.

9. Click where it says "Ethereum Main Network", select "Custom RPC" and enter `http://localhost:9545/`. This takes us off of the real ETH blockchain and onto our local blockchain. Click the back arrow to return to your account.

 **Be careful not to mix up your test wallet with your real one on the Main Network.**

10. You should see your first test account now has 100 ETH. (Address of `0x627306090abaB3A6e1400e9345bC60c78a8BEf57`) Additional generated accounts will also have this amount.

11. In a new terminal tab, install and start the Blocklancer node application.
```
npm install &&
npm run start
```

12. A browser will open to http://localhost:3000
![Blocklancer-homepage](https://user-images.githubusercontent.com/673455/34650232-ca4df39c-f37a-11e7-9b18-18861f282dff.png)

13. Try it! Create a listing and post it to IPFS and Ethereum.

### Using Docker

1. Start container:
```
docker-compose up -d
```

2. Set up Metamask using steps 6-10 above.

3. Visit http://localhost:3000 in your browser.

## Hosting on a server

If you want to host the Blocklancer DApp on web server such as EC2 you will need to configure things differently. Browsers can not connect to a test chain on the EC2 server, so you will need to connect to our existing contracts on the test networks or deploy your own. 

To use the contracts, modify the file `build/contracts/Listing.json` and add lines to the `networks` entry so it begins like this:
```
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xe66c9c6168d14be4c3c145f91890740cbdf9ec8b"
    },
    "4": {
      "events": {},
      "links": {},
      "address": "0x94de52186b535cb06ca31deb1fbd4541a824ac6d"
    },
    <...Possibly other networks for local test chains>
```
(Ropsten test network is id 3, and Rinkeby test netork is id 4)

## Get involved

We'd love to have you join us on this project.  We're still in the super early stages, please [email us](mailto:sun.smartbiz@gmail.com) to get started.
