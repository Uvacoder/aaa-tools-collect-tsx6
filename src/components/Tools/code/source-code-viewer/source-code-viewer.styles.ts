import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    margin: '24px 0 36px 0',
    fontSize: 24,

    [theme.fn.largerThan('sm')]: {
      fontSize: 36,
    },
  },

  PrismHeader: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  PrismHeaderGroup: {
    '& > span': {
      width: 12,
      height: 12,
      borderRadius: '50%',
    },

    '& > span:nth-of-type(1)': {
      background: '#fc625d',
    },

    '& > span:nth-of-type(2)': {
      background: '#fdbc40',
    },

    '& > span:nth-of-type(3)': {
      background: '#35cd4b',
    },
  },
}))
