import { Container, Group, NumberInput, Title } from '@mantine/core'
import React from 'react'

import { useStyles } from '@/components/Tools/converter/css-units/css-units.styles'
import { ListType } from '@/components/Tools/converter/css-units/types'

export default function CssUnits() {
  const { classes } = useStyles()
  const [em, setEm] = React.useState<number>(1)
  const [rem, setRem] = React.useState<number>(1)
  const [px, setPx] = React.useState<number>(16)
  const [percent, setPercent] = React.useState<number>(100)
  const [pt, setPt] = React.useState<number>(12)

  const emHandler = (val: number) => {
    setRem(val)
    setPx(val * 16)
    setPercent(val * 100)
    setPt(val * 12)
  }

  const remHandler = (val: number) => {
    setEm(val)
    setPx(val * 16)
    setPercent(val * 100)
    setPt(val * 12)
  }

  const pxHandler = (val: number) => {
    setEm(val / 16)
    setRem(val / 16)
    setPercent((val / 16) * 100)
    setPt((val / 16) * 12)
  }

  const percentHandler = (val: number) => {
    setEm(val / 100)
    setPx(val / 100)
    setRem((val / 100) * 16)
    setPt((val / 100) * 12)
  }

  const ptHandler = (val: number) => {
    setEm(val / 12)
    setRem(val / 12)
    setPx((val / 12) * 16)
    setPercent((val / 12) * 100)
  }

  const List: ListType[] = [
    {
      label: 'EM',
      description: 'Relative to the font-size of the element',
      state: em,
      onChange: (val) => {
        emHandler(val || 0)
      },
    },
    {
      label: 'REM',
      description: 'Relative to font-size of the root element',
      state: rem,
      onChange: (val) => {
        remHandler(val || 0)
      },
    },
    {
      label: 'Pixel',
      description: '1px = 1/96th of 1in',
      state: px,
      onChange: (val) => {
        pxHandler(val || 0)
      },
    },
    {
      label: 'Percent',
      description: 'Relative to the parent element',
      state: percent,
      onChange: (val) => {
        percentHandler(val || 0)
      },
    },
    {
      label: 'Point',
      description: '1pt = 1/72nd of 1in',
      state: pt,
      onChange: (val) => {
        ptHandler(val || 0)
      },
    },
  ]

  return (
    <Container size={800}>
      <Title order={1} align='center' className={classes.title}>
        CSS Units converter
      </Title>
      <Group spacing={8} grow direction='column'>
        {List.map((item, index) => {
          const decimalPoint = item.state.toString().split('.')

          return (
            <NumberInput
              key={index}
              value={item.state}
              variant='default'
              classNames={{
                input: classes.input,
                label: classes.label,
              }}
              label={item.label}
              description={item.description}
              onChange={item.onChange}
              precision={decimalPoint[1] ? decimalPoint[1].length : 0}
            />
          )
        })}
      </Group>
    </Container>
  )
}
