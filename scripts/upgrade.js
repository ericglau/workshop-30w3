const { ethers, upgrades } = require("hardhat");

async function main() {
  const GreeterV2 = await ethers.getContractFactory("GreeterV2");

  await upgrades.upgradeBeacon('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', GreeterV2);
  console.log("Beacon upgraded");

  const box = GreeterV2.attach('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0');
  console.log(await box.greet());

  const tx = await box.resetGreeting();
  await tx.wait();
  console.log(await box.greet());
}

main();