import {
  Burger,
  Button,
  Group,
  Header as MantineHeader,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core'
import { IconBrandGithub, IconMoonStars, IconSun } from '@tabler/icons'
import React from 'react'

import { useNavbar } from '@/lib/store'

import { useStyles } from '@/components/Layout/Header/Header.styles'
import { Logo } from '@/components/Layout/Header/Logo'
import { Search } from '@/components/Layout/Header/Search'
import Link from '@/components/Link'

export const Header = () => {
  const { opened, toggleOpened } = useNavbar()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes } = useStyles()
  const dark = colorScheme === 'dark'

  return (
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            size='sm'
            className={classes.burger}
          />
          <Logo onClick={() => opened && toggleOpened(false)} />
        </Group>

        <Group spacing={5}>
          <Search />
          <Tooltip label={dark ? 'Light mode' : 'Dark mode'} openDelay={500}>
            <Button
              variant='filled'
              color='gray'
              className={classes.button}
              onClick={() => toggleColorScheme()}
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </Button>
          </Tooltip>
          <Tooltip label='Source code' openDelay={500}>
            <Button
              variant='filled'
              color='gray'
              className={classes.button}
              component={Link}
              noIcon
              href='https://github.com/tszhong0411/tools.honghong.me'
            >
              <IconBrandGithub size={18} />
            </Button>
          </Tooltip>
        </Group>
      </div>
    </MantineHeader>
  )
}
