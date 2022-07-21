import { Container, Image, SimpleGrid, Text, ThemeIcon } from '@mantine/core'
import React from 'react'

import IMAGES from '@/lib/Icon'

import { useStyles } from '@/components/Intro/Features/Features.styles'
import { List } from '@/components/Intro/Features/List'

export const Features = () => {
  const { classes } = useStyles()
  const { data, supTitle } = List

  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant='light'
        className={classes.itemIcon}
        size={60}
        radius='md'
      >
        <Image src={IMAGES[item.image]} alt='icon' />
      </ThemeIcon>

      <div>
        <Text weight={700} size='lg' className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color='dimmed'>{item.description}</Text>
      </div>
    </div>
  ))

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 768 + 300, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  )
}
