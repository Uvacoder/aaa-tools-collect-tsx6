import { TablerIcon } from "@tabler/icons"

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
