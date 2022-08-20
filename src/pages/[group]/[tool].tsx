import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import dynamic from 'next/dynamic'

const Tool: NextPage = ({
  group,
  tool,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const DynamicTool = dynamic(
    () => import(`@/components/Tools/${group}/${tool}`)
  )

  return (
    <>
      <DynamicTool />
    </>
  )
}

export default Tool

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { group: 'code', tool: 'source-code-viewer' } },
      { params: { group: 'converter', tool: 'color' } },
      { params: { group: 'converter', tool: 'css-units' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      group: params.group,
      tool: params.tool,
    },
  }
}
