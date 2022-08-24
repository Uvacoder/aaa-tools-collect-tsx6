import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    margin: '24px 0 36px 0',
    fontSize: 24,

    [theme.fn.largerThan('sm')]: {
      fontSize: 36,
    },
  },

  label: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
    fontWeight: 500,
    fontSize: 14,
  },

  value: {
    fontSize: 18,
    fontWeight: 700,
    margin: '8px 0',

    [theme.fn.largerThan('md')]: {
      fontSize: 24,
    },
  },

  heading: {
    fontSize: 20,

    [theme.fn.largerThan('md')]: {
      fontSize: 24,
    },
  },

  colorInput: {
    maxWidth: 500,
    margin: '0 auto',
  },
}))
