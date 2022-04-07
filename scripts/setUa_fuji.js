const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0xB7CAa37D36C077C575BF227A23968186e54468Ee"
  );
  await omniChainNFT.setUaAddress(
    10012,
    ethers.utils.hexlify("0xb03a572ee91aEcbdfa8ceF8196BF140A1E7410dF")
  );
  await omniChainNFT.setUaAddress(
    10006,
    ethers.utils.hexlify("0xB7CAa37D36C077C575BF227A23968186e54468Ee")
  );
  await omniChainNFT.setUaAddress(
    10009,
    ethers.utils.hexlify("0x3cdB05ca336DbF64Fa091Bd660dBAd8106C686a6")
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
