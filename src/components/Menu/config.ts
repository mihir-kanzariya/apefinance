import { MenuEntry } from '@apefinance-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://apefinance.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://docs.apefinance.com/amm-launch',
      },
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://apefinance.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://apefinance.com/pools',
  },
  {
    label: 'Jungles',
    icon: 'JungleIcon',
    href: 'https://apefinance.com/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://apefinance.com/lottery',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://apefinance.com/referrals',
  },
  {
    label: 'Audits',
    icon: 'ShieldIcon',
    href: 'https://docs.apefinance.com/security/audits',
  },
  {
    label: 'Features',
    icon: 'PriceGuardIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.apefinance.com/tokenomics/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.apefinance.com/tokenomics/automatic-burning',
      },
      {
        label: 'Harvest Lockup',
        href: 'https://docs.apefinance.com/tokenomics/harvest-lockup',
      },
      {
        label: 'Anti-Whale',
        href: 'https://docs.apefinance.com/tokenomics/anti-whale',
      },
    ],
  },
  {
    label: 'Price Charts',
    icon: 'ChartIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/?token=0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xecc11a78490866e0073ebc4a4dcb6f75673c8685',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/apefinance',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/apefinance',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/apefinance-APE',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/ape',
      },
    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://apefinance.info',
      },
      {
        label: 'Tokens',
        href: 'https://apefinance.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://apefinance.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://apefinance.info/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/apefinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.apefinance.com',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.apefinance.com/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://apefinance.medium.com',
      },
      {
        label: 'Voting',
        href: 'https://voting.apefinance.com/',
      },
    ],
  },
]

export default config
