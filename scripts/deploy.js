const { ethers, upgrades } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");

  const beacon = await upgrades.deployBeacon(Greeter);
  await beacon.deployed();
  console.log("Beacon deployed to:", beacon.address);

  const box = await upgrades.deployBeaconProxy(beacon, Greeter, ["Hello 30W3"]);
  await box.deployed();
  console.log("Box deployed to:", box.address);

  console.log(await box.greet());
}

main();