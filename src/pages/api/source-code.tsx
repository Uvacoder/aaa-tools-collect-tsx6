import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query

  const src = await fetch(url.toString())

  const srcCode = await src.text()

  return res.status(200).send(srcCode)
}
