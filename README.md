# OpenZeppelin workshop - 30W3

## tl;dr

1. Setup
```
git clone https://github.com/ericglau/workshop-oz-30w3
cd workshop-oz-30w3
npm install --save-dev hardhat
npm install
```

2. Start a local Hardhat node
```
npx hardhat node
```

3. Open a separate terminal in the project directory, then run the below to deploy and upgrade:
```
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/upgrade.js
```

4. Run tests:
```
npx hardhat test
```

## Step-by-step tutorial

1. Go into an empty folder: `mkdir demo && cd demo`
2. Install Hardhat: `npm init && npm install --save-dev hardhat`
3. Install OpenZeppelin Upgradable Contracts: `npm install @openzeppelin/contracts-upgradeable`
4. Install Hardhat Upgrades plugin: `npm install --save-dev @openzeppelin/hardhat-upgrades @nomiclabs/hardhat-ethers ethers`
5. Go to https://wizard.openzeppelin.com/, check the Upgradability checkbox and leave the selection as Transparent.  We will be deploying a beacon proxy but the implementation contract can look the same as for a transparent proxy.
6. Using the Wizard's contract as reference, add the missing parts to the default Greeter.sol contract and change the original constructor to an initializer, so that it looks like [this](./contracts/Greeter.sol)
7. Make a copy of Greeter and change its name to GreeterV2.
8. Add a new function in GreeterV2:
```
function resetGreeting() public {
    greeting = "Hello World";
}
```
9. Using the script examples [here](https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades#beacon-proxies), add a [deploy.js](./scripts/deploy.js) and [upgrade.js](./scripts/upgrade.js) in the `scripts` directory but for the Greeter contracts.
10. Using the test example [here](https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades#beacon-proxies-tests), add a [upgrade-test.js](./test/upgrade-test.js) in the `test` directory but for the Greeter contracts.  The additional `const tx = await upgraded.resetGreeting();` section tests that the new function from the new version of the contract is working.
11. Start a local Hardhat node
```
npx hardhat node
```
12. Open a separate terminal in the project directory, then run the below to deploy a beacon and beacon proxy:
```
npx hardhat run --network localhost scripts/deploy.js
```
13. Edit the `BEACON_ADDRESS` and `BOX_ADDRESS` in `scripts/upgrade.js` with the addresses displayed in the output after running the above.
14. Run the below to upgrade the beacon:
```
npx hardhat run --network localhost scripts/upgrade.js
```
15. Run tests:
```
npx hardhat test
```
