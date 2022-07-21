import {
  ActionIcon,
  ColorInput,
  Container,
  Divider,
  Group,
  Paper,
  Text,
  Title,
} from '@mantine/core'
import { colord, extend, getFormat, random } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import cmykPlugin from 'colord/plugins/cmyk'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import namesPlugin from 'colord/plugins/names'
import React from 'react'
import { Refresh } from 'tabler-icons-react'

import { useStyles } from '@/components/Tools/converter/color/color.styles'
import { ListType } from '@/components/Tools/converter/color/types'

extend([hwbPlugin, cmykPlugin, lchPlugin, namesPlugin, a11yPlugin])

export default function Color() {
  const { classes } = useStyles()
  const [value, setValue] = React.useState('#ffffff')

  const ConvertList: ListType[] = [
    {
      label: 'HEX',
      value: colord(value).toHex(),
    },
    {
      label: 'RGB',
      value: colord(value).toRgbString(),
    },
    {
      label: 'HSL',
      value: colord(value).toHslString(),
    },
    {
      label: 'HWB',
      value: colord(value).toHwbString(),
    },
    {
      label: 'CMYK',
      value: colord(value).toCmykString(),
    },
    {
      label: 'LCH',
      value: colord(value).toLchString(),
    },
    {
      label: 'CSS KEYWORD',
      value: colord(value).toName({ closest: true }),
    },
  ]

  const AnalysisList: ListType[] = [
    {
      label: 'Is valid css value?',
      value: colord(value).isValid() ? 'Yes' : 'No',
    },
    {
      label: 'Format',
      value: getFormat(value) || '-',
    },
    {
      label: 'Hue (0-359)',
      value: `${colord(value).hue()} deg`,
    },
    {
      label: 'Brightness',
      value: `${Math.floor(colord(value).brightness() * 100)}% (${
        colord(value).isDark() ? 'Dark' : 'Light'
      })`,
    },
    {
      label: 'Luminance',
      value: `${Math.floor(colord(value).luminance() * 100)}%`,
    },
    {
      label: 'Contrast on white',
      value: `${colord(value).contrast()}:1`,
    },
  ]

  return (
    <Container size={1400}>
      <Title order={1} align='center' className={classes.title}>
        Color converter
      </Title>

      <ColorInput
        size='lg'
        onChange={setValue}
        value={value}
        className={classes.colorInput}
        rightSection={
          <ActionIcon onClick={() => setValue(random().toHex())}>
            <Refresh size={16} />
          </ActionIcon>
        }
        swatches={[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
      />
      <Group
        className={classes.wrapper}
        classNames={{
          child: classes.child,
        }}
        noWrap
        grow
      >
        <Paper shadow='sm' radius='lg' px='lg' py='xl' mb='lg' withBorder>
          <Text
            align='center'
            size='lg'
            weight={700}
            py={24}
            className={classes.heading}
          >
            CONVERSION
          </Text>
          {ConvertList.map((item, index) => (
            <React.Fragment key={index}>
              <Text className={classes.label}>{item.label}</Text>
              <Text className={classes.value}>{item.value}</Text>
              <Divider my={12} size='md' />
            </React.Fragment>
          ))}
        </Paper>
        <Paper shadow='sm' radius='lg' px='lg' py='xl' mb='lg' withBorder>
          <Text
            align='center'
            size='lg'
            weight={700}
            py={24}
            className={classes.heading}
          >
            ANALYSIS
          </Text>
          {AnalysisList.map((item, index) => (
            <React.Fragment key={index}>
              <Text className={classes.label}>{item.label}</Text>
              <Text className={classes.value}>{item.value}</Text>
              <Divider my={12} size='md' />
            </React.Fragment>
          ))}
        </Paper>
      </Group>
    </Container>
  )
}
