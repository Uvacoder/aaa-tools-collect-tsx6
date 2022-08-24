import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 60,
    position: 'fixed',
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  logo: {
    fill: theme.colors.red[9],
    height: 34,
    '& > path:last-child': {
      fill: theme.colorScheme === 'dark' ? '#fff' : '#000',
    },
    cursor: 'pointer',
    padding: '6px 8px',
    borderRadius: 8,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },

  button: {
    width: 34,
    height: 34,
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[0],
    },
  },
}))
