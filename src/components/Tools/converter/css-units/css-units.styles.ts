import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    margin: '24px 0 36px 0',
    fontSize: 24,

    [theme.fn.largerThan('sm')]: {
      fontSize: 36,
    },
  },

  input: {
    fontSize: 24,
    padding: '12px 16px',
    height: 64,

    [theme.fn.largerThan('sm')]: {
      fontSize: 32,
    },
  },

  label: {
    fontSize: 16,

    [theme.fn.largerThan('sm')]: {
      fontSize: 24,
    },
  },
}))
