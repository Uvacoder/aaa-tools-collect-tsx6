import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    width: '100%',
    position: 'fixed',
    [theme.fn.largerThan('md')]: {
      width: 300,
      minWidth: 300,
    },
    padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
    gap: theme.spacing.xl,
    height: '100vh',
    paddingTop: 80,
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 50,
  },
}))
