/* eslint-disable jsx-a11y/anchor-has-content */
import useStyles from '../../styles/Link.styles'

import { Anchor, AnchorProps } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

type LinkProps = {
  noIcon?: boolean
}

const CustomLink = ({
  href,
  children,
  noIcon = false,
  ...rest
}: AnchorProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const { classes } = useStyles()

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <Anchor {...rest}>{children}</Anchor>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <Anchor href={href} {...rest}>
        {children}
      </Anchor>
    )
  }
  return (
    <Anchor target='_blank' rel='noopener noreferrer' href={href} {...rest}>
      {children}
      {!noIcon && (
        <span>
          <IconExternalLink size={18} className={classes.externalLink} />
        </span>
      )}
    </Anchor>
  )
}

export default CustomLink
