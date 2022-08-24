import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core'
import { IconChevronRight, TablerIcon } from '@tabler/icons'
import React, { useState } from 'react'

import { useNavbar } from '@/lib/store'

import Link from '@/components/Link'

import { useStyles } from '@/styles/NavbarLink.styles'

export type LinksGroupProps = {
  icon: TablerIcon
  label: string
  initiallyOpened?: boolean
  links?: {
    label: string
    link: string
    description: string
    keywords?: string | string[]
  }[]
}

export const LinksGroup = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) => {
  const { classes } = useStyles()
  const [opened, setOpened] = useState(initiallyOpened || false)
  const { toggleOpened } = useNavbar()

  const items = links.map((link) => (
    <Link
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={() => toggleOpened(false)}
    >
      {link.label}
    </Link>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position='apart' spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant='light' size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml='md'>{label}</Box>
          </Box>
          <IconChevronRight
            className={classes.chevron}
            size={14}
            style={{
              transform: opened ? 'rotate(90deg)' : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>{items}</Collapse>
    </>
  )
}
