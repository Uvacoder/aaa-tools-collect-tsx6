import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 80,
    paddingBottom: 60,

    [theme.fn.largerThan('md')]: {
      paddingTop: 120,
      paddingBottom: 80,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    display: 'none',
    [theme.fn.largerThan('lg')]: {
      display: 'block',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    fontWeight: 700,
    fontSize: 28,
    textAlign: 'left',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fontFamily,

    [theme.fn.largerThan('md')]: {
      fontSize: 40,
      textAlign: 'center',
    },
  },

  description: {
    textAlign: 'left',
    fontSize: theme.fontSizes.md,

    [theme.fn.largerThan('md')]: {
      textAlign: 'center',
      fontSize: 18,
    },
  },
}))
