import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { SEO } from '@/components/Layout/SEO'

const Tool: NextPage = () => {
  const router = useRouter()
  const { group, tool } = router.query

  const DynamicTool = dynamic(
    () => import(`@/components/Tools/${group}/${tool}`)
  )

  return (
    <>
      <SEO />
      <DynamicTool />
    </>
  )
}

export default Tool

export const getServerSideProps: GetServerSideProps = async (context) => {
  const toolsList: string[] = ['css-units', 'color', 'source-code-viewer']

  if (!toolsList.includes(context?.query?.tool?.toString())) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
