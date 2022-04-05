const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    0,
    BigNumber.from("100")
  );

  await omniChainNFT.deployed();

  console.log(
    "Fantom testnet ----- omniChainNFT deployed to:",
    omniChainNFT.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
