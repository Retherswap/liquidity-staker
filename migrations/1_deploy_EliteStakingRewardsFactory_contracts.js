const StakingRewardsFactory = artifacts.require("StakingRewardsFactory");

// addresses[0]: 0x8c07205a6c3cCA4AaBa253fE65e2B1757126BB8d (Retherswap: Deployer)

module.exports = async function (deployer, network, addresses) {
  let rewardsToken;
  let stakingRewardsGenesis;
  
  if (network === 'hypra' || network === 'mainnet-fork') {
    rewardsToken = await '0xCf52025D37f68dEdA9ef8307Ba4474eCbf15C33c'; // RetherAddress
    stakingRewardsGenesis = await 1706004977; // 	Tue Jan 23 2024 11:33:07 GMT+0000
  } else {
    throw new Error('No Retherswap on this network')
  }
  
  await deployer.deploy(StakingRewardsFactory, rewardsToken, stakingRewardsGenesis);
};
