const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0xB7CAa37D36C077C575BF227A23968186e54468Ee"
  );
  await omniChainNFT.crossChain(
    10009,
    "0x3cdB05ca336DbF64Fa091Bd660dBAd8106C686a6",
    ethers.BigNumber.from("1"),
    { value: ethers.utils.parseEther("5") }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
