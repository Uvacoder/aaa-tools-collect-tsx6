import Head from 'next/head'
import { useRouter } from 'next/router'

import { Favicons } from '@/components/Layout/Favicons'

import { SeoProps } from '@/types/types'

export const defaultMeta = {
  title: '小康 – Developer, YouTuber',
  siteName: '小康 Blog',
  image: 'https://honghong.me/static/images/banner.png',
  type: 'website',
}

export const SEO = (props: SeoProps) => {
  const router = useRouter()

  const meta = {
    ...defaultMeta,
    ...props,
  }

  meta['title'] = props.templateTitle
    ? `${props.templateTitle}丨${meta.siteName}`
    : meta.title

  meta['description'] = props.description
    ? props.description
    : 'Front-end developer, YouTuber.'

  return (
    <Head>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <title>{meta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={meta.description} />
      <meta
        property='og:url'
        content={`https://tools.honghong.me${router.asPath}`}
      />
      <link
        rel='canonical'
        href={`https://tools.honghong.me${router.asPath}`}
      />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='小康' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={`${meta.image}`} />
      <meta property='og:image:alt' content={meta.description} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content='en'></meta>
      <meta name='twitter:image' content={`${meta.image}`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@TszhongLai0411' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:creator' content='@TszhongLai0411' />
      <link rel='icon' type='image/x-icon' href='/static/favicon/favicon.ico' />
      {Favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/static/static/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}
