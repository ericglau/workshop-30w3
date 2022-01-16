const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Greeter", function() {
  it('works', async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");

    const beacon = await upgrades.deployBeacon(Greeter);
    const instance = await upgrades.deployBeaconProxy(beacon, Greeter, ["Hello 30W3"]);

    await upgrades.upgradeBeacon(beacon, GreeterV2);
    const upgraded = GreeterV2.attach(instance.address);

    expect(await upgraded.greet()).to.equal('Hello 30W3');

    const tx = await upgraded.resetGreeting();
    await tx.wait();
    expect(await upgraded.greet()).to.equal('Hello World');
  });
});