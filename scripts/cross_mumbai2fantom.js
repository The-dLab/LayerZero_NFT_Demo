const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x3cdB05ca336DbF64Fa091Bd660dBAd8106C686a6"
  );
  await omniChainNFT.crossChain(
    10012,
    "0xb03a572ee91aEcbdfa8ceF8196BF140A1E7410dF",
    ethers.BigNumber.from("1"),
    { value: ethers.utils.parseEther("1") }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
