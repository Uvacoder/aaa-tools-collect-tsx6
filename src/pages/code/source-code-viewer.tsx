import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import {
  ActionIcon,
  Button,
  Container,
  Group,
  LoadingOverlay,
  Paper,
  Stack,
  TextInput,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useClipboard, useMediaQuery } from '@mantine/hooks'
import { IconCopy, IconLink, IconTextWrap, IconTrashX } from '@tabler/icons'
import axios from 'axios'
import * as beautify from 'js-beautify'
import React from 'react'

import { isValidUrl } from '@/lib/isValidURL'

import { useStyles } from '@/styles/source-code-viewer.styles'

export default function SourceCodeViewer() {
  const { classes } = useStyles()
  const [code, setCode] = React.useState<string>('')
  const [visible, setVisible] = React.useState<boolean>(false)
  const clipboard = useClipboard()
  const matches = useMediaQuery('(min-width: 640px)')
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const form = useForm({
    initialValues: {
      url: '',
    },

    validate: {
      url: (url) => (isValidUrl(url) ? null : 'Not valid URL'),
    },
  })

  const submitHandler = async (url: string) => {
    setVisible(true)

    const { data } = await axios.post('/api/source-code', null, {
      params: {
        url,
      },
    })

    data && setVisible(false)
    setCode(data)
  }

  return (
    <Container size={1200}>
      <Title order={1} align='center' className={classes.title}>
        Source code viewer
      </Title>

      <form onSubmit={form.onSubmit((values) => submitHandler(values.url))}>
        <TextInput
          required
          placeholder='https://honghong.me'
          icon={<IconLink size={24} />}
          label='URL'
          size={matches ? 'lg' : 'sm'}
          rightSection={
            <Button
              type='submit'
              sx={(theme) => ({
                height: 28,
                [theme.fn.largerThan('sm')]: { height: 40 },
              })}
            >
              View
            </Button>
          }
          rightSectionWidth={96}
          type='url'
          {...form.getInputProps('url')}
        />
      </form>
      <Stack spacing={0} my={36} sx={{ position: 'relative' }}>
        <Paper px={16} py={8} withBorder className={classes.PrismHeader}>
          <Group position='apart'>
            <Group className={classes.PrismHeaderGroup} spacing='sm'>
              <span></span>
              <span></span>
              <span></span>
            </Group>
            <Group>
              <Tooltip
                label='Clear'
                position='top'
                transition='fade'
                openDelay={500}
              >
                <ActionIcon onClick={() => setCode('')}>
                  <IconTrashX size={16} />
                </ActionIcon>
              </Tooltip>
              <Tooltip
                label='Format'
                position='top'
                transition='fade'
                openDelay={500}
              >
                <ActionIcon onClick={() => setCode(beautify.html(code))}>
                  <IconTextWrap size={16} />
                </ActionIcon>
              </Tooltip>
              <Tooltip
                label={clipboard.copied ? 'Copied' : 'Copy to clipboard'}
                position='top'
                transition='fade'
                color={clipboard.copied ? 'green' : 'black'}
                openDelay={500}
              >
                <ActionIcon onClick={() => clipboard.copy(code)}>
                  <IconCopy size={16} />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
        </Paper>
        <SandpackProvider
          theme={dark ? 'dark' : 'light'}
          files={{
            '/index.html': code,
          }}
          customSetup={{
            entry: '/index.html',
          }}
          options={{
            recompileMode: 'delayed',
            recompileDelay: 500,
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor
              showLineNumbers
              wrapContent
              style={{ minHeight: 800 }}
            />
          </SandpackLayout>
        </SandpackProvider>
        <LoadingOverlay visible={visible} />
      </Stack>
    </Container>
  )
}
