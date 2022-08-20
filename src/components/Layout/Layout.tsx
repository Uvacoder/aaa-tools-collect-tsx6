import { AppShell } from '@mantine/core'
import { PropsWithChildren } from 'react'

import { Footer } from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'
import { Navbar } from '@/components/Layout/Navbar'
import { SEO } from '@/components/Layout/SEO'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SEO />
      <AppShell
        padding='md'
        navbar={<Navbar />}
        header={<Header />}
        footer={<Footer />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
            paddingTop: 80,
            paddingBottom: 80,
            minHeight: `calc(100vh - 80px)`,
          },
          root: {
            [theme.fn.largerThan('md')]: {
              paddingLeft: 300,
            },
          },
        })}
      >
        {children}
      </AppShell>
    </>
  )
}
