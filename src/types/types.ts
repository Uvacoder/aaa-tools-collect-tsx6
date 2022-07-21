import React from 'react'

import { defaultMeta } from '@/components/Layout/SEO'

export type ChildrenType = {
  children: React.ReactNode
}

export type storeType = {
  opened: boolean
  toggleOpened: (bool?: boolean) => void
}

export type FaviconType = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

export type SeoProps = {
  description?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>
