import { useStyles } from '@/components/Layout/Header/Header.styles'
import Link from '@/components/Link'
import { Logo as MainLogo } from '@/components/Logo'

export const Logo = () => {
  const { classes } = useStyles()

  return (
    <Link href='/' className={classes.logoWrapper}>
      <MainLogo className={classes.logo} />
    </Link>
  )
}
