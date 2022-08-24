import React from 'react'

import Link from '@/components/Link'
import { Logo as MainLogo } from '@/components/Logo'

import { useStyles } from '@/styles/Header.styles'

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
