import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      96: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x869A3448c71011A81FFc6bC3c7d5580618FC481e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
