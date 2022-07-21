import { Text } from '@mantine/core'

import { ListType } from '@/components/Intro/Features/types'
import Link from '@/components/Link'

export const List: ListType = {
  supTitle: 'Features',
  data: [
    {
      image: 'tick',
      title: 'Free',
      description: 'Our tools are completely free and no ads on the website',
    },
    {
      image: 'idea',
      title: 'Easy to use',
      description: "Our tools are easy to use. It doesn't require any skills",
    },
    {
      image: 'flash',
      title: 'Fast',
      description: 'Our tools are fast. It can save your time',
    },
    {
      image: 'github',
      title: 'Open source',
      description: (
        <Text>
          Our tools are open source on{' '}
          <Link href='https://github.com/tszhong0411/tools.honghong.me' noIcon>
            GitHub
          </Link>
          .
        </Text>
      ),
    },
  ],
}
