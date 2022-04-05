const hre = require("hardhat");
// const { ethers } = require("ethers");

async function main() {
  const account = "0x244a807084a3eb9fD5fE88Aa0b13AEC8401577Bd";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0xB7CAa37D36C077C575BF227A23968186e54468Ee"
  );
  const after = await omniChainNFT.balanceOf(account);
  console.log("Fuji NFT balance: ", after.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
