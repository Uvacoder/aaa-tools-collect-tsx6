import { IconBrandCodepen } from '@tabler/icons';
import { IconBrandCodesandbox } from '@tabler/icons';
import { IconBrandDribbble } from '@tabler/icons';
import { IconBrandGithub } from '@tabler/icons';
import { IconBrandPocket } from '@tabler/icons';

type List = {
  icon: TablerIcon
  href: string
}

export const List: List[] = [
  {
    icon: IconBrandTwitter,
    href: 'https://twitter.com/VaLandscapes',
  },
  {
    icon: IconBrandCodepen,
    href: 'https://www.codepen.io/uvacoder/',
  },
  {
    icon: IconBrandCodesandbox,
    href: 'https://www.codesandbox.com/uvacoder/',
  },
  {
    icon: IconBrandGithub,
    href: 'https://www.github.com/uvacoder/',
  },
  {
    icon: IconBrandDribbble,
    href: 'https://www.dribbble.com/uvacoder/',
  },
  {
    icon: IconBrandPocket,
    href: 'https://www.dribbble.com/uvacoder/',
  },
]
