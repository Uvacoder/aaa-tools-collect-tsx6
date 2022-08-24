import { Button, Container, Group, Text, Title } from '@mantine/core'

import Link from '@/components/Link'

import { useStyles } from '@/styles/404.styles'

export default function FourZeroFour() {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color='dimmed'
        size='lg'
        align='center'
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position='center'>
        <Button
          component={Link}
          href='/'
          variant='subtle'
          size='md'
          underline={false}
        >
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
