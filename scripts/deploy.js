async function main() {
  const MyToken = await hre.ethers.getContractFactory("FortuneTreasureWealth");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmWS38j33NdyPQPmB5azWGvb7gM9eg6GzfZpGT3yhp9wod");
  await nft.safeMint("0x4fcB1A896d53aa0F4883c760BB4b8f26af525416", "ipfs://QmYrAD95xvfaxv8gidYZvd23xwPDBaSJkSPyBvVTStywTR");
  await nft.safeMint("0x4fcB1A896d53aa0F4883c760BB4b8f26af525416", "ipfs://QmZSHfuBV9Cvb5Cv9QvnDJY1jUvjPKowtk4Gx7gcTu624a");
  await nft.safeMint("0x5F77940BA41CE6D78fE75074C7AB74A5D60f7EB2", "ipfs://QmTNAvgfUhxzg6yG2nrNNytbcGnQXrkt1Ft5LJ6ZtbKZJT");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });