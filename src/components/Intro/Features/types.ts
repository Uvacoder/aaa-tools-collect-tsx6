import React from 'react'

export type ListType = {
  supTitle: string
  data: {
    image: string
    title: string
    description: string | React.ReactNode
  }[]
}
