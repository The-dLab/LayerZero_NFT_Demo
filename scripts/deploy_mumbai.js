const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
    200,
    300
  );

  await omniChainNFT.deployed();

  console.log("Mumbai ----- omniChainNFT deployed to:", omniChainNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
