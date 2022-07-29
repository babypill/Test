import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Moonarium Swap',
  description:
    'The most popular AMM on BSC by user count! Earn MOONS through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Moonarium Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://moonariumswap.org/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Moonarium Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Moonarium Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Moonarium Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Moonarium Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Moonarium Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Moonarium Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Moonarium Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Moonarium Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Moonarium Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Moonarium Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Moonarium Swap')}`,
      }
    default:
      return null
  }
}
