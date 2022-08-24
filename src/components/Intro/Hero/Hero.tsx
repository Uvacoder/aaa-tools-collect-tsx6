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
            小康
          </Text>
        </Title>

        <Text size='lg' color='dimmed' className={classes.description}>
          You can find helpful tools for developers here, I hope it can save
          your time. And build your dream project.
        </Text>
      </div>
    </div>
  )
}
