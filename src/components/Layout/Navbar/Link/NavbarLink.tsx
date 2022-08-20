import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core'
import React, { useState } from 'react'

import { useNavbar } from '@/lib/store'

import { useStyles } from '@/components/Layout/Navbar/Link/NavbarLink.style'
import { LinksGroupProps } from '@/components/Layout/Navbar/types'
import Link from '@/components/Link'
import { IconChevronRight } from '@tabler/icons'

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
