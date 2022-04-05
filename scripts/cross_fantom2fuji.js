const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0xb03a572ee91aEcbdfa8ceF8196BF140A1E7410dF"
  );
  await omniChainNFT.crossChain(
    10006,
    "0xB7CAa37D36C077C575BF227A23968186e54468Ee",
    ethers.BigNumber.from("1"),
    { value: ethers.utils.parseEther("5") }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
