import React from 'react'

import { useStyles } from '@/components/Layout/Header/Header.styles'
import Link from '@/components/Link'
import { Logo as MainLogo } from '@/components/Logo'

export const Logo = ({ ...rest }: React.ComponentPropsWithRef<'a'>) => {
  const { classes } = useStyles()

  return (
    <Link
      href='/'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <MainLogo className={classes.logo} />
    </Link>
  )
}
