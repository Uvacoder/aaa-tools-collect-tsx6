import { Navbar as MantineNavbar, ScrollArea } from '@mantine/core'
import React from 'react'

import { useNavbar } from '@/lib/store'

import { LinksGroup } from '@/components/Layout/Navbar/Link/NavbarLink'
import { List } from '@/components/Layout/Navbar/List'

import { useStyles } from '@/styles/Navbar.styles'

export const Navbar = () => {
  const { opened } = useNavbar()
  const { classes } = useStyles()
  const links = List.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <MantineNavbar
      px='md'
      className={classes.navbar}
      hidden={!opened}
      hiddenBreakpoint='md'
    >
      <MantineNavbar.Section grow component={ScrollArea}>
        <div>{links}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}
