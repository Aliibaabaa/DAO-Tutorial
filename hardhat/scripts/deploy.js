const hre = require("hardhat");

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    '0xc39f035F7f9781c4bF2cBb8BD9f1cA0DF44B3DaC'
    ,
    {
      value: ethers.utils.parseEther("0.1"),
    }
  );

  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// FakeNFTMarketplace deployed to:  0x33d18ACd9E938e624ace819BBB55A6194E2053b7
// CryptoDevsDAO deployed to:  0x4c6c4D6Ca5ca6530c5d4522289d156d10574326A