const hre = require("hardhat");

async function main() {
  const account = "0x244a807084a3eb9fD5fE88Aa0b13AEC8401577Bd";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x3cdB05ca336DbF64Fa091Bd660dBAd8106C686a6"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Mumbai NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(201);
  console.log("Token 201 owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
