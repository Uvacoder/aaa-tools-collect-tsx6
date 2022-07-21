import { AnchorProps } from '@mantine/core'

export type LinkProps = {
  href: string
  children: React.ReactNode
  noIcon?: boolean
} & React.ComponentPropsWithRef<'a'> &
  AnchorProps<'a'>
