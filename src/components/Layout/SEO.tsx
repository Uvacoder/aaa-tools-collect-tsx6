import { NextSeo, NextSeoProps } from 'next-seo'
import { useRouter } from 'next/router'

import { Favicons } from '@/components/Layout/Favicons'

export const SEO = (props: NextSeoProps) => {
  const router = useRouter()

  return (
    <NextSeo
      titleTemplate='%s | 小康 Tools'
      defaultTitle='小康 – Developer, YouTuber'
      description='Some tools for web developer'
      canonical={`https://tools.honghong.me${router.asPath}`}
      twitter={{
        cardType: 'summary_large_image',
        site: '@TszhongLai0411',
        handle: '@TszhongLai0411',
      }}
      openGraph={{
        url: `https://tools.honghong.me${router.asPath}`,
        type: 'website',
        title: '小康 – Developer, YouTuber',
        description: 'Some tools for web developer',
        images: [
          {
            url: 'https://honghong.me/static/images/og/og.png',
            width: 1200,
            height: 630,
            alt: 'Some tools for web developer',
          },
        ],
      }}
      additionalLinkTags={[...Favicons]}
      {...props}
    />
  )
}
