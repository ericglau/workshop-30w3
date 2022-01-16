# OpenZeppelin workshop - 30W3

## Quickstart

```
git clone https://github.com/ericglau/workshop-oz-30w3
cd workshop-oz-30w3
npm install --save-dev hardhat
npx hardhat node
```

In a separate terminal, deploy and then upgrade a beacon proxy:
```
cd workshop-oz-30w3
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/upgrade.js
```

Run tests:
```
npx hardhat test
```

