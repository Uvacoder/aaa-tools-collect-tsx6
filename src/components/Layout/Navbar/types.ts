import { Icon as TablerIcon } from 'tabler-icons-react'

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
