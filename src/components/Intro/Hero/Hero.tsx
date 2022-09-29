import { Text, Title, useMantineTheme } from '@mantine/core'

import { Dots } from '@/components/Intro/Hero/Dots'

import { useStyles } from '@/styles/Hero.styles'

export const Hero = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <div className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Some tools for web developers made by
          <Text component='span' color={theme.primaryColor} inherit>
            {' '}
            uvacoder
          </Text>
        </Title>

        <Text size='lg' color='dimmed' className={classes.description}>
          Just a start at curating some webdev tools for programmers.
        </Text>
      </div>
    </div>
  )
}
